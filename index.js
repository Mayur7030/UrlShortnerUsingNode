import express from "express";
import { practiceDataset } from "./connection/practiceDataset.js";
import { router } from "./router/router.js";

const app = express();

//connect mongoose to node server
practiceDataset(
  "mongodb+srv://reactmayurpawar_db_user:Mayur%40123@practice.qyvlieq.mongodb.net/?appName=practice"
).then((res) => {
  console.log("mongoDb connected!");
});

//middleware
app.use(express.json());
//routing
app.use("/user",router);

app.listen(3000, () => {
  console.log("listen 3000");
});
