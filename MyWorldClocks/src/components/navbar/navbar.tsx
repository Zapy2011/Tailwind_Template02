import { component$, PropFunction } from "@builder.io/qwik";
import { useNavigate, useLocation } from "@builder.io/qwik-city";
import { onToggleMenu } from "../menu";

interface NavbarProps {
  continents: string[];
  onSelectContinent: PropFunction<(continent: string) => void>;
}

const defaultContinents = [
  "Asia",
  "Europe",
  "Africa",
  "North America",
  "South America",
  "Australia",
  "Antarctica"
];

export default component$<NavbarProps>(({ onSelectContinent }) => {
  const nav = useNavigate();
  const { params } = useLocation();
  const continents = defaultContinents;
  // Removed unused formatContinent function
  return (    <nav class="flex justify-between items-center w-[92%] mx-auto min-h-[50px]">
      <div>
        <a href="/" onClick$={() => nav('/')} class="cursor-pointer">
          {/* <img class="w-16" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="logo" /> */}
          <span>World Clocks</span>
        </a>
      </div>
      <div class="nav-links md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 opacity-0 md:opacity-100 invisible md:visible transition-all duration-500 ease-in-out">
        <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          {continents.map((continent) => (            <li key={continent}>              <a                class={"hover:text-gray-500 " + (continent.toLowerCase().replace(' ', '-') === params.continent ? "font-bold underline" : "font-medium")}
                href={`/${continent.toLowerCase().replace(' ', '-')}`}
                onClick$={() => {
                  onSelectContinent(continent);
                  nav(`/${continent.toLowerCase().replace(' ', '-')}`);
                }}
              >
                {continent}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div class="flex items-center gap-6">
        <ion-icon onClick$={() => onToggleMenu()} name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
      </div>
    </nav>
  );
});