import axios from "axios";
import { QUESTION_API } from "../utils/api";

const getMcq = async () => {
  try {
    const response = axios.get(QUESTION_API);
    return response;
  } catch (error) {
    console.error("Error calling API:", error);
    throw error;
  }
};

export default getMcq;
