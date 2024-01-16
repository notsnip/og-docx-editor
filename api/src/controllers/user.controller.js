
import apiError from '../utils/apiError.js';
import apiResponse from '../utils/apiResponse.js';
import userModel from '../models/user.model.js';

const registerUser = async (req, res) => {
    const { username, password, email } = req.body;
  
    if (!username || !password || !email) {
      new apiError(400, "Contents can't be empty");
    }
  
    // Check if the email already exists in the database
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      new apiError(400, "Email already exists");
    }
  
    // If the email doesn't exist, create a new user
    const newUser = new userModel({ username, password, email });
    await newUser.save();
  
    // Return a success response
    new apiResponse(201, "User registered successfully", newUser);
  };

export default registerUser;

