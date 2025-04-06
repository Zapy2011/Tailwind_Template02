import { component$, useVisibleTask$, useSignal, useStyles$ } from '@builder.io/qwik';

// Define the CSS as a string
const styles = `
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

.clock-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
}

.clock {
  display: flex;
  height: 400px;
  width: 400px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1), 0 25px 45px rgba(0, 0, 0, 0.1);
  position: relative;
}

.clock label {
  position: absolute;
  inset: 20px;
  text-align: center;
  transform: rotate(calc(var(--i) * (360deg / 12)));
}

.clock label span {
  display: inline-block;
  font-size: 30px;
  font-weight: 600;
  color: #18191a;
  transform: rotate(calc(var(--i) * (-360deg / 12)));
}

.indicator {
  position: absolute;
  height: 10px;
  width: 10px;
  display: flex;
  justify-content: center;
}

.indicator::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  z-index: 100;
  background: #18191a;
  border: 4px solid #e74c3c;
}

.indicator .hand {
  position: absolute;
  bottom: 0;
  border-radius: 25px;
  transform-origin: bottom;
  background: #e74c3c;
}

.hand.second {
  height: 130px;
  width: 4px;
  background: #e74c3c;
}

.hand.minute {
  height: 120px;
  width: 5px;
  background: #18191a;
}

.hand.hour {
  height: 100px;
  width: 8px;
  background: #18191a;
}

.dark {
  .clock {
    background: #18191a;
  }
  
  .clock label span {
    color: #fff;
  }
  
  .indicator::before {
    background: #fff;
  }
  
  .hand.minute,
  .hand.hour {
    background: #fff;
  }
}
`;

export interface ClockProps {
  id: string;
  city: string;
  utcOffset: number;
}

export const Clock = component$<ClockProps>(({ id, city, utcOffset }) => {
  useStyles$(styles);
  
  const hourHandRef = useSignal<Element>();
  const minuteHandRef = useSignal<Element>();
  const secondHandRef = useSignal<Element>();
  const containerRef = useSignal<Element>();

  // Initialize clock and start the animation
  useVisibleTask$(() => {
    const updateTime = () => {
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

      // Set dark mode based on time
      if (containerRef.value) {
        const hour = utcTime.getUTCHours();
        const isNightTime = hour >= 18 || hour < 6;
        (containerRef.value as HTMLElement).classList.toggle('dark', isNightTime);
      }

      requestAnimationFrame(updateTime);
    };

    requestAnimationFrame(updateTime);
  });

  return (
    <div class="clock-container" ref={containerRef}>
      <h2>{city}</h2>
      <div class="clock" id={id}>
        {Array.from({ length: 12 }, (_, i) => (
          <label key={i + 1} style={{ '--i': i + 1 }}>
            <span>{i + 1}</span>
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