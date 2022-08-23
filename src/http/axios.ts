import axios from "axios";

const $BaseApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `token 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`,
  },
});

export { $BaseApi };
