// const express = require("express");
// const router = express.Router();
// // const { userId, jobId } = req.body;

// const Application = require("../models/Application");

// // Apply Job
// router.post("/apply", async (req, res) => {
//   try {
//     // const { userId, jobId } = req.body;
//     const {
//   userId,
//   jobId,
//   name,
//   email,
//   phone,
//   coverLetter,
// } = req.body;

//     const alreadyApplied =
//       await Application.findOne({
//         user: userId,
//         job: jobId,
//       });

//     if (alreadyApplied) {
//       return res.status(400).json({
//         message: "Already Applied",
//       });
//     }

//     // const application =
//     //   await Application.create({
//     //     user: userId,
//     //     job: jobId,
//     //   });

//     const application =
//   await Application.create({
//     user: userId,
//     job: jobId,

//     name,
//     email,
//     phone,
//     coverLetter,
//   });

//     res.status(201).json(application);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// // Get Applicants By Job
// router.get("/job/:jobId", async (req, res) => {
//   try {
//     const applicants =
//       await Application.find({
//         job: req.params.jobId,
//       })
//         .populate("user")
//         .populate("job");

//     res.json(applicants);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// router.get("/user/:userId", async (req, res) => {
//   try {
//     const applications =
//       await Application.find({
//         user: req.params.userId,
//       }).populate("job");

//     res.json(applications);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// // Update Status
// router.put("/:id", async (req, res) => {
//   try {
//     const application =
//       await Application.findByIdAndUpdate(
//         req.params.id,
//         {
//           status: req.body.status,
//         },
//         {
//           new: true,
//         }
//       );

//     res.json(application);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();

const Application = require("../models/Application");

// Apply Job
router.post("/apply", async (req, res) => {
  try {
    const {
      userId,
      jobId,
      name,
      email,
      phone,
      coverLetter,
    } = req.body;

    // Validation
    if (!userId || !jobId) {
      return res.status(400).json({
        message: "UserId and JobId are required",
      });
    }

    // Check if already applied
    const alreadyApplied = await Application.findOne({
      user: userId,
      job: jobId,
    });

    if (alreadyApplied) {
      return res.status(400).json({
        message: "Already Applied",
      });
    }

    // Create application
    const application = await Application.create({
      user: userId,
      job: jobId,
      name,
      email,
      phone,
      coverLetter,
    });

    res.status(201).json(application);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get Applicants By Job
router.get("/job/:jobId", async (req, res) => {
  try {
    const applicants = await Application.find({
      job: req.params.jobId,
    })
      .populate("user")
      .populate("job");

    res.json(applicants);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get Applications of Logged-in User
router.get("/user/:userId", async (req, res) => {
  try {
    const applications = await Application.find({
      user: req.params.userId,
    }).populate("job");

    res.json(applications);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Update Application Status
router.put("/:id", async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    res.json(application);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;