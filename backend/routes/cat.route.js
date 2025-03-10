import express from "express";
import {
  addCat,
  deleteCat,
  getCat,
  getOneCat,
  updateCat,
} from "../controller/cat.controller.js";
const router = express.Router();

router.post("/", addCat);
router.get("/", getCat);
router.get("/:id", getOneCat);
router.put("/:id", updateCat);
router.delete("/:id", deleteCat);

export default router;
