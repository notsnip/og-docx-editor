import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import docModel from "../models/document.model.js";

const addDocument = async (req, res) => {
  try {
    const { content, author, doc_id } = req.body;

    if (!content || !doc_id) {
      throw new apiError(400, "Content and Id is required");
    }

    // Update document if exists
    const existingDocument = await docModel.findOne({ doc_id });

    if (existingDocument) {
      existingDocument.content = content;
      existingDocument.author = author;
      existingDocument.updated_at = new Date();
      await existingDocument.save();

      res
        .status(200)
        .json(
          new apiResponse(
            200,
            "Document updated successfully",
            existingDocument,
            true
          )
        );
    } else {
      const newDocument = await docModel.create(req.body);
      await newDocument.save();

      res
        .status(201)
        .json(
          new apiResponse(201, "Document added successfully", newDocument, true)
        );
    }
  } catch (error) {
    res.status(error.status || 500).json(new apiResponse(500, error.message));
  }
};

const getDocument = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new apiError(400, "Document id is required");
    }

    const document = await docModel.findOne({ doc_id: id }).exec();

    if (!document) {
      throw new apiError(404, "Document not found");
    }

    res
      .status(200)
      .json(new apiResponse(200, "Document found", document, true));
  } catch (error) {
    res
      .status(error.status || 500)
      .json(new apiResponse(error.status || 500, error.message));
  }
};

export { addDocument, getDocument };
