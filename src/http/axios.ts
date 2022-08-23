import axios from "axios";
import { errorToast } from "../components/Common/Toast/actions";

const $BaseApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `token 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`,
  },
});

$BaseApi.interceptors.response.use(
  (config) => config,
  async (err) => {
    const originalRequest = err.config;

    if (
      err.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;

      errorToast(
        "Appliaction need YOUR Access-token for increase the request limit"
      );
    }
  }
);

export { $BaseApi };
