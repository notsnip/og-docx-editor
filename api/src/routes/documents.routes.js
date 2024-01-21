import express from "express";
const router = express.Router();

import addDocument from "../controllers/document.controlller.js";

// "/docs" 

router.post("/", addDocument);

export default router;
