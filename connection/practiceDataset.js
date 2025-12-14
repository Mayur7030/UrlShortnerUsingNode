import mongoose from "mongoose";


const practiceDataset = (url) => {
  return mongoose.connect(url);
};

export { practiceDataset };

