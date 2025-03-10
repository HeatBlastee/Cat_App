import express from "express";
import {
  addCat,
  deleteCat,
  getCat,
  updateCat,
} from "../controller/cat.controller.js";
const router = express.Router();

router.post("/", addCat);
router.get("/", getCat);
router.put("/:id", updateCat);
router.delete("/:id", deleteCat);

export default router;
