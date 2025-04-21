import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Navbar from "~/components/navbar/navbar";
import { Clock } from "~/components/clock/clock";
import clocksData from '~/data/clocks.json';
import { ClockData } from '~/model/clock-data';

export default component$(() => {
  const clocks = clocksData.map(clock => new ClockData(clock));
  const selectedContinent = useSignal<string | null>(null);
  const continents = Array.from(new Set(clocks.map(clock => clock.continent)));

  const handleSelectContinent = $((continent: string) => {
    selectedContinent.value = continent;
  });

  const filteredClocks = selectedContinent.value
    ? clocks.filter(clock => clock.continent === selectedContinent.value)
    : clocks;

  return (
    <div class="container mx-auto py-8">
      <Navbar
        continents={continents}
        selectedContinent={selectedContinent.value}
        onSelectContinent={handleSelectContinent}
      />
      <h1 class="text-4xl font-bold text-center mb-8">World Clocks</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 auto-cols-fr">
        {filteredClocks.map((clock) => (
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
