import axios from "axios";

const baseURL = "https://localhost:7014";

const API_URL = "/api/Auth";

const  login = async (email, password) => {
  return axios
    .post(baseURL + API_URL + "/login", {
      email,
      password
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(response.data)
      }
      return response;
    });
};

const loginWithRefreshToken = async (token) => {
  return axios
    .post(baseURL + API_URL + "/refreshToken", {
      token,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(response.data)
      }
      return response;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  login,
  loginWithRefreshToken,
  logout,
  getCurrentUser,
};

export default AuthService;