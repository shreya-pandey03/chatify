import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';
dotenv.config();
import cookiePareser from 'cookie-parser';


import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

const __dirname = path.resolve();
// const express = require("express");
// const cors = require("cors");

const PORT = ENV.PORT || 5000;

app.use(express.json({ limit: "5mb" })); // req.body

// app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookiePareser());




app.use(cors({
  origin: 'http://localhost:3000', // frontend origin
  credentials: true
}));


app.listen(PORT, () => 
    console.log('Server is running on port:'+ PORT));
  connectDB();    
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// make ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  // console.log("Server running on port: " + PORT);
   console.log(`Server running on port: ${PORT}`);
  connectDB();
});
