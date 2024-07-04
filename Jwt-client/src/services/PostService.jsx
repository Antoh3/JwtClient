import axios from "axios";
import authHeader from './AuthHeader'

const baseURL = "https://localhost:7014";

const API_URL = "/api/Home";

const getAllPrivatePosts = () => {
  return axios.get(baseURL+API_URL, { headers: authHeader() });
};

const PostService = {
  getAllPrivatePosts,
};

export default PostService;