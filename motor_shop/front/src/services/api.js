import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export default api;

// import express from "express";

// const announcements = express();

// announcements.get("http://localhost:3000/announcements", (req, res) => {});

// export default announcements;
