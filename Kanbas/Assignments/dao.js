import model from "./model.js";

export const findAssignmentsForCourse = async (courseId) => {
    try {
        const assignments = await model.find({ course: courseId }).exec();
        console.log("Found assignments:", assignments);
        return assignments;
    } catch (error) {
        console.error("Error finding assignments for course:", error);
        throw error;
    }
}; 

export const createAssignment = async (assignment) => {
    delete assignment._id;
    return await model.create(assignment);
};

export const deleteAssignment = async (assignmentId) => {
    return await model.deleteOne({ _id: assignmentId });
};

export const updateAssignment = async (assignmentId, assignmentUpdates) => {
    try {
        const result = await model.findByIdAndUpdate(
            assignmentId,
            assignmentUpdates,
            { new: true }  // This option returns the updated document
        );
        return result;
    } catch (error) {
        console.error("Error updating assignment:", error);
        throw error;
    }
};