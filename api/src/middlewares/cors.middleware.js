import { CLIENT_URL } from "../constants.js";
import cors from "cors";

export default cors({ origin: CLIENT_URL });
