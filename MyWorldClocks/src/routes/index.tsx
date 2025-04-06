import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Clock } from "~/components/clock/clock";

export default component$(() => {
  const clocks = [
    { id: "minnesota", city: "Minnesota", utcOffset: -5 },
    { id: "chicago", city: "Chicago", utcOffset: -6 },
    { id: "beijing", city: "Beijing", utcOffset: 8 },
    { id: "taipei", city: "Taipei", utcOffset: 8 },
    { id: "newyork", city: "New York", utcOffset: -5 },
    { id: "phnompenh", city: "Phnom Penh", utcOffset: 7 },
  ];

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
