import axios from "axios";

const $BaseApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `token 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`,
  },
});

export { $BaseApi };
