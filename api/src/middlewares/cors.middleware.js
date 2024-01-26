import cors from 'cors';
import {CLIENT_URL} from '../constants';

export default cors({
    origin:"http://localhost:5173" && CLIENT_URL,
});