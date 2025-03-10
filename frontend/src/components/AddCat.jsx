import { BadgePlus } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import axios from "axios";

const AddCat = () => {
  const [open, setOpen] = useState(false);
  const [catData, setCatData] = useState({
    name: "",
    description: "",
    origin: "",
    colors: "",
    temperament: "",
    image: "",
  });

  const handleChange = (e) => {
    setCatData({ ...catData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/api/cats", catData); // Replace with your backend URL
      setOpen(false); // Close the dialog
      setCatData({ name: "", description: "", origin: "", colors: "", temperament: "", image: "" }); // Reset form
      alert("Cat added successfully!");
    } catch (error) {
      console.error("Error adding cat:", error);
      alert("Failed to add cat.");
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
            <BadgePlus size={32} className="text-white" />
          </button>
        </DialogTrigger>
        <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">Add a New Cat</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Name"
              name="name"
              value={catData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
            <Input
              placeholder="Description"
              name="description"
              value={catData.description}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
            <Input
              placeholder="Origin"
              name="origin"
              value={catData.origin}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
            <Input
              placeholder="Colors"
              name="colors"
              value={catData.colors}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
            <Input
              placeholder="Temperament"
              name="temperament"
              value={catData.temperament}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={catData.image}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <DialogFooter className="mt-4 flex justify-end gap-2">
            <Button
              variant="secondary"
              onClick={() => setOpen(false)}
              className="bg-gray-300 text-gray-800 hover:bg-gray-400 transition-colors rounded-lg px-4 py-2"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-lg px-4 py-2"
            >
              Add Cat
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddCat;
