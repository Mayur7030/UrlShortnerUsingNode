import express from "express";
import {handleGetAnalytics,handlePostRequest,handleGetrequest} from "../controller/handleRequest.js";
const router = express.Router();


router.route("/").post( (req, res) => {
return  handlePostRequest(req, res);
});

router.get("/:shortId", (req, res) => {
  return handleGetrequest(req, res);
});
router.get("/analytics/:shortId", (req, res) => {
  return handleGetAnalytics(req, res);
});

export { router };
