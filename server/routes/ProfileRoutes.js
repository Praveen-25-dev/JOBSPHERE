const express = require("express");
const Profile = require("../models/Profile");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      userId: req.user.id,
    });

    res.json(profile || {});
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/", authMiddleware, async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      {
        userId: req.user.id,
      },
      {
        ...req.body,
        userId: req.user.id,
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.json({
      success: true,
      profile,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;