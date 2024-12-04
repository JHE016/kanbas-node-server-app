import model from "./model.js";

export const findAllQuizzesForCourse = async (courseId) => {
  console.log("Finding quizzes for course:", courseId);
  const quizzes = await model.find({ course: courseId });
  console.log("Database query result:", quizzes);
  return quizzes;
};

export const findPublishedQuizzesForCourse = async (courseId) =>
  await model.find({ course: courseId, published: true });

export const createQuiz = async (courseId, quizData) =>
  await model.create({ course: courseId, ...quizData });

export const updateQuiz = async (courseId, quizId, quizData) =>
  await model.findOneAndUpdate({ _id: quizId, course: courseId }, quizData, { new: true });

export const togglePublish = (quizId, published) =>
  model.findOneAndUpdate({ _id: quizId }, { published }, { new: true });

export const deleteQuiz = (courseId, quizId) =>
  model.deleteOne({ _id: quizId, course: courseId });
