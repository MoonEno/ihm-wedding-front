import axios from "axios";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    authorization: sessionStorage.getItem("authorization"),
  },
});

export function setAxiosToken(token) {
  sessionStorage.setItem("authorization", token);
  instance.defaults.headers = {
    authorization: token,
  };
}

instance.interceptors.request.use((request) => {
  return request;
});

instance.interceptors.response.use(
  (response) => {
    const { url } = response.config;

    // local
    if (url.startsWith("/api-local/")) {
      const { data, headers } = response;
      const totalCount = Number(headers["x-total-count"]);

      return totalCount ? { data, totalCount } : data;
    }

    // dev
    if (url.startsWith("/api/")) {
      return response.data.resultData;
    }

    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default instance;
