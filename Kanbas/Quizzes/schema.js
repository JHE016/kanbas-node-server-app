import mongoose from "mongoose";

const schema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  title: { type: String, required: true },
  available_from: { type: Date, required: true },
  available_until: { type: Date, required: true },
  due_date: { type: Date, required: true },
  points: { type: Number, required: true },
  questions: { type: Number, required: true },
  published: { type: Boolean, required: true, default: false },
},
  { collection: "quizzes" }
);
export default schema;
