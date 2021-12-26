import axios from "axios";
import { useRouter } from "next/router";

const API_URL = "/api/auth/";

export const register = async (
  name: string,
  lastName: string,
  email: string,
  password: string
) => {
  await axios
    .post(API_URL + "signup", {
      name,
      lastName,
      email,
      password,
    })
};

export const login = async (username: string, password: string) => {
  const router = useRouter();

  await axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("cub_user", JSON.stringify(response.data));
      }
      router.push("/");
      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("cub_user");
};

export default {
  register,
  login,
  logout,
};
