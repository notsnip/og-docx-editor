import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import docModel from "../models/document.model.js";

const addDocument = async (req, res) => {
  try {
    const { content, author, doc_id } = req.body;

    if (!content || !doc_id ) {
      throw new apiError(400, "Content and Id is required");
    }

    const newDocument = await docModel.create(req.body);
    await newDocument.save();

    res
      .status(201)
      .json(
        new apiResponse(201, "Document added successfully", newDocument, true)
      );
  } catch (error) {
    res.status(error.status || 500).json(new apiResponse(500, error.message));
  }
};

export default addDocument;
