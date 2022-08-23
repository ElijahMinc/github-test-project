import axios from "axios";

const $BaseApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `token ${
      process.env.REACT_APP_PERSONAL_TOKEN ??
      "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"
    }`,
    //
  },
});

export { $BaseApi };
