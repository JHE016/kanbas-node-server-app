import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
    // Delete an assignment by ID
    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await assignmentsDao.deleteAssignment(assignmentId);
        res.send(status);
    });

    // Update an assignment by ID
    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        try {
            const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
            // Get the updated assignment to return
            const updatedAssignment = await assignmentsDao.findAssignmentsForCourse(assignmentUpdates.course);
            res.json(updatedAssignment);
        } catch (error) {
            res.status(500).json({ error: "Error updating assignment" });
        }
    });
}
