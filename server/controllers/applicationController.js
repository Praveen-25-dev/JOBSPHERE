const Application = require("../models/Application");
export const getApplicantsByJob = async (req, res) => {
  try {
    const applicants = await Application.find({
      jobId: req.params.jobId,
    });

    res.json(applicants);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};