import express from "express";
import dotenv from "dotenv";
import jobsRouter from "./routes/jobs.js"; 

const app = express();

// Load environment variables from config.env file
dotenv.config({ path: "./config/config.env" }) 


const PORT = process.env.PORT;

// Mounting / Importing routes from Router
app.use("/api/v1",jobsRouter);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})