import { useSignal } from '@builder.io/qwik';

export const Navbar = () => {
    
    return (
        <header class="bg-white">
            <nav class="flex justify-between items-center w-[92%] mx-auto">
                <div>
                    <img class="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." />
                </div>
                <div
                    
                    class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
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
                
            </nav>
        </header>
    );
};