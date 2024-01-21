import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import docModel from "../models/document.model.js";

const addDocument = async (req, res) => {
  try {
    const { content, author } = req.body;

    if (!content) {
      throw new apiError(400,"Content and Author are required");
    }

    const newDocument = new docModel({ content, author });
    await newDocument.save();

    res.status(201).json(new apiResponse(201,"Document added successfully", newDocument,true));
  } catch (error) {
    res.status(error.status || 500).json(new apiResponse(error.message));
  }
};

export default addDocument;