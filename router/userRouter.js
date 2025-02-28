import express from "express";

const router = express.Router();

//user signup | POST operation
router.post("/", (req, res) => {
  try {
    console.log(req.body);
    res.json({
      status: "success",
      message: "your post req has been succcessful",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
