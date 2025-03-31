import { navigationItems } from "@/interfaces/navigationbar";
import { User, Theater, Search} from "lucide-react";

const NavigationBar = () => {
  const navigationEntries: navigationItems = {
    Inicio: "Inicio",
    Estrenos: "Estrenos",
    Proximamente: "Proximamente",
    Cartelera: "Cartelera",
  };

  return (
    <div className="bg-black h-16 w-full text-white flex justify-between items-center drop-shadow-2xl font-bold px-6">
      {/* Logo Section */}
      <div className="text-lg">
        <h1>LOGO GOES HERE</h1>
      </div>

      {/* Navigation Links Section */}
      <div className="flex space-x-6">
        {Object.entries(navigationEntries).map(([key, value]) => (
          <ul key={key}>
            <li className="hover:text-blue-400 cursor-pointer">{value}</li>
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
