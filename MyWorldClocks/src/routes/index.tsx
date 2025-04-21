import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Clock } from "~/components/clock/clock";
import clocksData from '~/data/clocks.json';
import { ClockData } from '~/model/clock-data';

export default component$(() => {
  const clocks = clocksData.map(clock => new ClockData(clock));

  return (
    <div class="container mx-auto py-8">
      <h1 class="text-4xl font-bold text-center mb-8">World Clocks</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clocks.map((clock) => (
          <Clock key={clock.id} {...clock} />
        ))}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "World Clocks",
  meta: [
    {
      name: "description",
      content: "World Clocks built with Qwik",
    },
  ],
};
