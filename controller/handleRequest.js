import { urlModel } from "../model/url.js";
import { nanoid } from "nanoid";

const handlePostRequest = async (req, res) => {
  if (!req.body) return req.status(400).json({ err: "url is required" });
  let result = await urlModel.create({
    redirectUrl: req.body.redirectUrl,
    shortUrl: nanoid(5),
    visitHistory: [],
  });
  console.log("123", result);
  res.send(result);
};

const handleGetrequest = async (req, res) => {
  const entry = await urlModel.findOneAndUpdate(
    {
      shortUrl: req.params.shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  console.log("222", entry);
  res.redirect(entry.redirectUrl);
};

const handleGetAnalytics = async (req, res) => {
  const shortId = req.params.shordId;
  const result = await urlModel.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};

export { handlePostRequest, handleGetrequest,
  handleGetAnalytics
 };
