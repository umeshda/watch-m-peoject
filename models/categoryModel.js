import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    // unique: true,
  },
  slug: {                 //npm i slugify(where any special characters and spaces are replaced with hyphens or underscores)
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Category", categorySchema);