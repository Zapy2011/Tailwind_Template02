import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';
import './clock.css';

export interface ClockProps {
  id: string;
  city: string;
  utcOffset: number;
}

export const Clock = component$<ClockProps>(({ id, city, utcOffset }) => {
  const hourHandRef = useSignal<Element>();
  const minuteHandRef = useSignal<Element>();
  const secondHandRef = useSignal<Element>();
  const containerRef = useSignal<Element>();
  const rafId = useSignal<number>(0);

  useVisibleTask$(({ cleanup }) => {
    let lastFrameTime = performance.now();
    const FPS = 60;
    const frameInterval = 1000 / FPS;

    const updateTime = (currentTime: number) => {
      rafId.value = requestAnimationFrame(updateTime);

      // Throttle updates to 60 FPS
      const deltaTime = currentTime - lastFrameTime;
      if (deltaTime < frameInterval) return;
      
      lastFrameTime = currentTime;

      const now = new Date();
      const utcTime = new Date(now.getTime() + utcOffset * 60 * 60 * 1000);

      const seconds = utcTime.getUTCSeconds();
      const minutes = utcTime.getUTCMinutes();
      const hours = utcTime.getUTCHours();

      const secToDeg = (seconds + utcTime.getMilliseconds() / 1000) * 6;
      const minToDeg = (minutes + seconds / 60) * 6;
      const hrToDeg = (hours % 12 + minutes / 60) * 30;

      if (hourHandRef.value && minuteHandRef.value && secondHandRef.value) {
        (hourHandRef.value as HTMLElement).style.transform = `rotate(${hrToDeg}deg)`;
        (minuteHandRef.value as HTMLElement).style.transform = `rotate(${minToDeg}deg)`;
        (secondHandRef.value as HTMLElement).style.transform = `rotate(${secToDeg}deg)`;
      }

      if (containerRef.value) {
        const hour = utcTime.getUTCHours();
        const isNightTime = hour >= 18 || hour < 6;
        (containerRef.value as HTMLElement).classList.toggle('dark', isNightTime);
      }
    };

    rafId.value = requestAnimationFrame(updateTime);

    // Cleanup function to cancel animation frame
    cleanup(() => {
      if (rafId.value) {
        cancelAnimationFrame(rafId.value);
      }
    });
  });

  return (
    <div class="clock-container" ref={containerRef}>
      <h2 class="text-xl font-semibold">{city}</h2>
      <div class="clock" id={id}>
        {Array.from({ length: 12 }, (_, i) => (
          <label key={i + 1} style={{ transform: `rotate(${(i + 1) * 30}deg)` }}>
            <span style={{ transform: `rotate(${-(i + 1) * 30}deg)` }}>{i + 1}</span>
          </label>
        ))}
        <div class="indicator">
          <span class="hand hour" ref={hourHandRef}></span>
          <span class="hand minute" ref={minuteHandRef}></span>
          <span class="hand second" ref={secondHandRef}></span>
        </div>
      </div>
    </div>
  );
});