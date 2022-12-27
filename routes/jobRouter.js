import {
  createJobs,
  deleteJob,
  getAllJob,
  updateJob,
  showStats,
} from "../controllers/jobsController.js";
import express from "express";
import { testUser } from "../middleware/testUser.js";
const router = express.Router();

router.route("/").post(testUser, createJobs).get(getAllJob);

router.route("/stats").get(showStats);
router.route("/:id").patch(testUser, updateJob).delete(testUser, deleteJob);

export default router;
