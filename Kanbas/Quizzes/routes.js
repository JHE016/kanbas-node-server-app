import * as dao from "./dao.js";
import mongoose, { Types } from "mongoose";

export default function QuizRoutes(app) {
  const fetchAllQuizzesForCourse = async (req, res) => {
    const { courseId } = req.params;
    console.log("Received request for courseId:", courseId);
    
    try {
      // Convert string courseId to ObjectId
      const courseObjectId = new mongoose.Types.ObjectId(courseId);
      console.log("Converted to ObjectId:", courseObjectId);
      
      const quizzes = await dao.findAllQuizzesForCourse(courseObjectId);
      console.log("Found quizzes:", quizzes);
      res.status(200).json(quizzes);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: error.message });
    }
  };

  const fetchPublishedQuizzesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const quizzes = await dao.findPublishedQuizzesForCourse(courseId);
    res.status(200).json(quizzes);
  };

  const createQuiz = async (req, res) => {
    const { courseId } = req.params;
    const quizData = req.body;
    const createdQuiz = await dao.createQuiz(courseId, quizData);
    res.status(201).json(createdQuiz);
  };

  const updateQuiz = async (req, res) => {
    const { courseId, quizId } = req.params;
    const quizData = req.body;
    const updatedQuiz = await dao.updateQuiz(courseId, quizId, quizData);
    res.status(200).json(updatedQuiz);
  };

  const togglePublish = async (req, res) => {
    const { quizId } = req.params;
    const { published } = req.body;
    const updatedQuiz = await dao.togglePublish(quizId, published);
    res.status(200).json(updatedQuiz);
  };

  const deleteQuiz = async (req, res) => {
    const { courseId, quizId } = req.params;
    const result = await dao.deleteQuiz(courseId, quizId);
    res.status(200).json(result);
  };

  app.get("/api/courses/:courseId/quizzes", fetchAllQuizzesForCourse);
  app.get("/api/courses/:courseId/quizzes/published", fetchPublishedQuizzesForCourse);
  app.post("/api/courses/:courseId/quizzes", createQuiz);
  app.put("/api/courses/:courseId/quizzes/:quizId", updateQuiz);
  app.put("/api/quizzes/:quizId/publish", togglePublish);
  app.delete("/api/courses/:courseId/quizzes/:quizId", deleteQuiz);
}
