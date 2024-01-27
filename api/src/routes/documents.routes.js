import express from "express";
const router = express.Router();

import {addDocument,getDocument} from "../controllers/document.controlller.js";

// "/docs" 
router.get("/:id", getDocument);
router.post("/", addDocument);

export default router;
