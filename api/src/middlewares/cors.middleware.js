import { CLIENT_URL } from "../constants.js";
import cors from "cors";

export default cors({ origin: "http://localhost:5173" || CLIENT_URL });
