import axios from "axios";

const API_URL_REGISTER = "/api/users";
const API_URL_LOGIN = "/api/users/login";

//Register User
const registerUser = async (userData) => {
  const data = await axios.post(API_URL_REGISTER, userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
};

//Login User
const loginUser = async (userData) => {
  const data = await axios.post(API_URL_LOGIN, userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
};

//Logout User
const logoutUser = () => {
  localStorage.removeItem("user");
};

const authService = {
  registerUser,
  loginUser,
  logoutUser,
};

export default authService;
