import express from "express";
import getJobs from "../controllers/jobsController.js";

// Create the router instance
const router = express.Router();

//Importing jobsController
router.route("/jobs").get(getJobs);


// router.get("/jobs", (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "This will display all the jobs in the database",
//     });
// })

export default router;