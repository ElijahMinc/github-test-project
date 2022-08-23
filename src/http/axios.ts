import axios from "axios";

const $BaseApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${
      process.env.REACT_APP_PERSONAL_TOKEN ??
      "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"
    }`,
  },
});

export { $BaseApi };
