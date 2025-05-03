import { component$, useContext } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AppContext } from './layout';
import { Clock } from "~/components/clock/clock";

export default component$(() => {
  const { clocks, selectedContinent } = useContext(AppContext);

  const filteredClocks = selectedContinent.value
    ? clocks.filter((clock: any) => clock.continent === selectedContinent.value)
    : clocks;

  return (
    <div class="container mx-auto py-8">
      <h1 class="text-4xl font-bold text-center mb-8">World Clocks</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 auto-cols-fr">
        {filteredClocks.map((clock: any) => (
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
      content: "World Clocks",
    },
  ],
};
