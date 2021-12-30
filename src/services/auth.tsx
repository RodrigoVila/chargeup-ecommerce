import axios from "axios";

const API_URL = "/api/auth/";

export const register = async (
  name: string,
  lastName: string,
  email: string,
  password: string
) => {
  const { data } = await axios.post(API_URL + "signup", {
    name,
    lastName,
    email,
    password,
  });

  return data;
};

export const login = async (username: string, password: string) => {
  const { data } = await axios.post(API_URL + "signin", {
    username,
    password,
  });
  
  return data;
};

export const logout = () => {
  localStorage.removeItem("cub_user");
};

export default {
  register,
  login,
  logout,
};
