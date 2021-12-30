import axios from "axios";

const API_URL = "http://localhost:8080/api/users/";

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("cub_user"));

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
};

// const getUserBoard = () => {
//   return axios.get(API_URL + "user", { headers: authHeader() });
// };

// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };

export const fetchUserList = () => {
  return axios
    .get(API_URL)
    .then((data) => console.log("!!!data!", data))
    .catch((e) => console.info("!error fetching", e));
};

export default {
  // getUserBoard,
  // getAdminBoard,
};
