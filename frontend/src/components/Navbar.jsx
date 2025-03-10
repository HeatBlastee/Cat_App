import { BadgePlus, PawPrint } from 'lucide-react';
import { Input } from './ui/input';
import AddCat from './AddCat';

const Navbar = () => {
  return (
    <div className="bg-gray-800 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
        {/* Logo with Icon */}
        <div className="flex items-center">
          <PawPrint size={32} strokeWidth={1.5} className="text-white" />
          <div className="text-2xl text-white font-bold tracking-wide pl-3">
            PAWS
          </div>
        </div>

        {/* Search Input */}
        <div className="flex-1 mx-4">
          <Input 
            placeholder="Search"
            className="w-full max-w-md bg-gray-700 text-white border-0 focus:ring-2 focus:ring-blue-500 rounded-lg"
          />
        </div>

        {/* Add Button */}
        <AddCat/>
      </div>
    </div>
  );
};

export default Navbar;
