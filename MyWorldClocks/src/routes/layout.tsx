import { component$, Slot, useSignal, useContextProvider, createContextId, $ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import clocksData from '~/data/clocks.json';
import { ClockData } from '~/model/clock-data';
import NavBar from "~/components/navbar/navbar";

export const AppContext = createContextId<any>('AppContext');

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  const clocks = clocksData.map(clock => ({ ...clock })); // Use plain objects instead of ClockData instances
  const selectedContinent = useSignal<string | null>(null);
  const continents = Array.from(new Set(clocks.map(clock => clock.continent)));

  const handleSelectContinent = $((continent: string) => {
    selectedContinent.value = continent;
  });

  useContextProvider(AppContext, {
    selectedContinent,
    continents,
    handleSelectContinent,
    clocks
  });

  return (
    <div class="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] min-h-screen">
      <header class="bg-white">
        <NavBar 
          continents={continents} 
          selectedContinent={selectedContinent.value} 
          onSelectContinent={handleSelectContinent} 
        />
      </header>
      <main>
        <Slot />
      </main>
    </div>
  );
});
