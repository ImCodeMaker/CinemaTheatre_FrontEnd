"use client"
import { useRouter } from "next/navigation";
import { User, Theater, Search } from "lucide-react";
import { navigationhandler } from "@/utils/navigationhandler";
import { navigationEntries } from "@/utils/navigationdata";

const NavigationBar = () => {
    const router = useRouter();

    return (
        <div className="bg-black h-16 w-full text-white flex justify-between items-center drop-shadow-2xl font-bold px-6">
            <div className="text-lg">
                <h1>LOGO GOES HERE</h1>
            </div>

            <div className="flex space-x-6">
                {navigationEntries.map(({ label, route }) => (
                    <ul key={label}>
                        <li className="relative cursor-pointer hover:text-blue-400">
                            <button
                                onClick={() => navigationhandler(router, route)}
                                className="after:content-[''] after:block after:w-0 after:h-1 after:bg-blue-400 after:transition-all after:duration-300 after:bottom-0 after:left-0 hover:after:w-full"
                            >
                                {label}
                            </button>
                        </li>
                    </ul>
                ))}
            </div>

            {/* Search Input Section */}
            <div className="flex items-center relative">
                <input
                    type="text"
                    name="text"
                    placeholder="Look for a movie!"
                    className="bg-gray-800 rounded-md p-2 outline-none h-[35px] w-50 text-sm"
                />
                <Search className="absolute right-2 text-gray-400 w-4 h-4" />
            </div>

            {/* Login Section */}
            <div className="flex space-x-5 items-center">
                <div className="flex space-x-2 justify-center items-center">
                    <User />
                    <div className="text-center flex justify-center items-center hover:text-gray-400 cursor-pointer text-sm">
                        Login
                    </div>
                </div>
                <div className="flex space-x-2 justify-center items-center">
                    <Theater />
                    <div className="text-center flex justify-center items-center hover:text-gray-400 cursor-pointer text-sm">
                        Find Theatres
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
