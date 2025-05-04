export const prerender = true;
import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import { AppContext } from '../layout';
import { Clock } from "~/components/clock/clock";

interface ClockData {
  id: string;
  continent: string;
  city: string;
  country: string;
  state: string;  // Added missing state property
  utcOffset: number;
}

export default component$(() => {  const { params } = useLocation();
  const { handleSelectContinent, clocks } = useContext(AppContext);
  const rawContinent = params.continent;
  
  // Format the continent name for display (capitalize first letter of each word)
  const formatContinent = (name: string): string => {
    return name
      .split('-')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const displayContinent = formatContinent(rawContinent);
  
  useTask$(({ track }) => {
    track(() => rawContinent);
    if (handleSelectContinent) {
      handleSelectContinent(displayContinent);
    }
  });

  const filteredClocks = (clocks as ClockData[]).filter(clock => 
    clock.continent === displayContinent
  );
  
  return (
    <div class="container mx-auto py-8">      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {filteredClocks.map(clock => (
          <Clock key={clock.id} {...clock} />
        ))}
      </div>
    </div>
  );
});

export const head: DocumentHead = ({ params }) => {
  const formatContinent = (name: string): string => {
    return name
      .split('-')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const displayContinent = formatContinent(params.continent);

  return {
    title: `World Clocks - ${displayContinent}`,
    meta: [
      {
        name: "description",
        content: `World Clocks showing time in ${displayContinent}`,
      },
    ],
  };
};
