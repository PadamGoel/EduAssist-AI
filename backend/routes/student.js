const express = require ("express");
const { Submission } = require("../db")
const router = express.Router();

// Submit Assignment
router.post("/submit", async (req, res) => {
    try {
        const { studentName, studentId, assignmentId, content } = req.body;
        const submission = new Submission({ studentName, studentId, assignmentId, content });
        await submission.save();
        res.status(201).json({ message: "Assignment submitted successfully", submission });
    } catch (error) {
        res.status(500).json({ error: "Error submitting assignment" });
    }
});

module.exports = router;