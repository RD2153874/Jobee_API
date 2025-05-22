// Get all jobs => /api/v1/jobs
const getJobs = (req,res,next) => {
    res.status(200).json({
        success: true,
        message: "This will display all the jobs in the database",
    });
}

export default getJobs;