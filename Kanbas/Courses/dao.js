import model from "./model.js";

export const findAllCourses = () => model.find();

export const findCoursesForEnrolledUser = (userId) => model.find({ enrolledUsers: userId });

export const createCourse = (course) => {
    delete course._id; // Remove the _id field if present
    return model.create(course);
};

export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });

export const updateCourse = (courseId, courseUpdates) => model.updateOne({ _id: courseId }, { $set: courseUpdates });
  
  
  