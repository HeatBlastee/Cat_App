import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import axios from "axios";
import { Pencil, XCircle } from "lucide-react";

const UpdateDialog = ({ catData }) => {
  const [open, setOpen] = useState(false);
  const [updatedCatData, setUpdatedCatData] = useState({ ...catData });

  // Handle input change
  const handleChange = (e) => {
    setUpdatedCatData({ ...updatedCatData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:3000/api/cats/${catData._id}`, updatedCatData);
      setOpen(false);
      alert("Cat updated successfully!");
    } catch (error) {
      console.error("Error updating cat:", error);
      alert("Failed to update cat.");
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
  <div className="flex justify-center py-2">
    <button className="p-2 rounded text-blue-600 hover:bg-blue-50 transition-colors flex border-2 border-blue-600 items-center gap-2">
      <Pencil className="w-5 h-5" />Update
    </button>
  </div>
</DialogTrigger>
        <DialogContent className="bg-white p-6 rounded-2xl shadow-xl max-w-lg w-full">
          <DialogHeader className="border-b pb-2 mb-4">
            <DialogTitle className="text-2xl font-bold text-gray-800">Update Cat</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Name"
              name="name"
              value={updatedCatData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
            <Input
              placeholder="Description"
              name="description"
              value={updatedCatData.description}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
            <Input
              placeholder="Origin"
              name="origin"
              value={updatedCatData.origin}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
            <Input
              placeholder="Colors"
              name="colors"
              value={updatedCatData.colors}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
            <Input
              placeholder="Temperament"
              name="temperament"
              value={updatedCatData.temperament}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={updatedCatData.image}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <DialogFooter className="mt-6 flex justify-end gap-2">
            <Button
              variant="secondary"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors rounded-lg px-4 py-2"
            >
              <XCircle className="w-4 h-4" />
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-lg px-4 py-2"
            >
              <Pencil className="w-4 h-4" />
              Update Cat
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateDialog;
