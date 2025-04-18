import dotenv from "dotenv";
dotenv.config();
import path from "path";

import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();

app.use(express.json()); //to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("Hello ji");
// });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Port is running on ${PORT}`);
});
