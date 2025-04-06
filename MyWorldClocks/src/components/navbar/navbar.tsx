import { component$ } from "@builder.io/qwik";
import { onToggleMenu } from "../menu";

export default component$(() => {
  return (
    <nav class="flex justify-between items-center w-[92%] mx-auto">
      <div>
        <img class="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="logo" />
      </div>
      <div class="nav-links md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 opacity-0 md:opacity-100 invisible md:visible transition-all duration-500 ease-in-out">
        <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <a class="hover:text-gray-500" href="#">Products</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="#">Solution</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="#">Resource</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="#">Developers</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="#">Pricing</a>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-6">
        <ion-icon onClick$={() => onToggleMenu()} name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
      </div>
    </nav>
  );
});