import { mongoose } from "mongoose";
import Cat from "../models/cat.model.js";

export const addCat = async (req,res)=>{
    const data = req.body;

    if(!data.name || !data.image || !data.description || !data.colors || !data.temperament || !data.origin){
        return res.status(400).json({message:"All fields are required"});
    }
    const newCat = new Cat(data);
    try {
        await newCat.save();
        res.status(201).json({message:"Cat added successfully"});

    } catch (error) {
        console.error("Error adding cat",error.message);
        res.status(500).json({message:"Internal server error"});
    }
};

export const getCat = async (req,res)=>{
    try {
        const cats = await Cat.find();
        res.status(200).json(cats);
    } catch (error) {
        console.error("Error fetching cats",error.message);
        res.status(500).json({message:"Internal server error"});
    }
}

export const updateCat = async (req,res)=>{
    try {
        const id = req.params.id;
        const data = req.body;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message:"Invalid cat id"});
        }
        const updatedCat = await Cat.findByIdAndUpdate(id,data,{new:true});
        res.status(200).json({data:updatedCat, message:"Cat updated successfully"});   
    } catch (error) {
        console.error("Error updating cat",error.message);
        res.status(500).json({message:"Internal server error"});
    }
}

export const deleteCat = async (req,res)=>{
    const id = req.params.id;
    try {
        await Cat.findByIdAndDelete(id);
        return res.status(200).json({message:"Cat deleted successfully"});
    } catch (error) {
        console.log("Error deleting cat",error.message);
        res.status(500).json({message:"Internal server error"});
    }
}