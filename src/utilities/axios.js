import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://aircall-backend.onrender.com",
});

const isStatusInRange = (status, start, end) =>
  status >= start && status <= end;

const handleResponse = (response) => {
  if (isStatusInRange(response.status, 200, 299)) {
    return response.data;
  } else {
    throw new Error(response);
  }
};

const handleError = (error) => {
  console.error(error);
};

class Axios {
  async get(ENDPOINT) {
    try {
      const response = await apiUrl.get(ENDPOINT);
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  }

  async patch(ENDPOINT, data) {
    try {
      const response = await apiUrl.patch(ENDPOINT, data);
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  }
}

export const apiAxios = new Axios();
