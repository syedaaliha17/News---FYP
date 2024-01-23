import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://localhost:8080/api",
});

export const config = async () => {
  const token = null;

  return {
    headers: {
      Authorization: `Bearer ${token}`,

      Accept: "application/json",
    },
  };
};

export const authConfig = async (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,

      Accept: "application/json",
    },
  };
};

export default apiClient;
