import axios from "axios";

const client = axios.create({
  baseURL: "https://api.websitecarbon.com",
});

export const retrieveSite = async (url) => {
  const response = await client.get("/b?url=" + url);
  return {
    url: response.data.url,
    cleanerThan: response.data.p,
    co2: response.data.c,
  };
};
