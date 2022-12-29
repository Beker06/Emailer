const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://softkitec.com"
    : "http://localhost:3001";

export default baseUrl;
