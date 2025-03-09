import express from "express";
const { Assignment } = require("../db")
const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


// Upload Assignment
router.post("/upload", async (req, res) => {
    try {
        const { title, description, uploadedBy, dueDate } = req.body;
        const assignment = new Assignment({ title, description, uploadedBy, dueDate });
        await assignment.save();
        res.status(201).json({ message: "Assignment uploaded successfully", assignment });
    } catch (error) {
        res.status(500).json({ error: "Error uploading assignment" });
    }
});

import express from "express";
const { Submission } = require("../db")
import OpenAI from "openai"; // Or replace with your ML model

// Batch Grade Assignments
router.post("/grade", async (req, res) => {
    try {
        const submissions = await Submission.find({ graded: false });

        if (submissions.length === 0) {
            return res.json({ message: "No pending submissions to grade" });
        }

        const gradedSubmissions = await Promise.all(
            submissions.map(async (submission) => {
                const response = await openai.chat.completions.create({
                    model: "gpt-4",
                    messages: [
                        { role: "system", content: "You are an AI teacher assistant grading assignments." },
                        { role: "user", content: `Grade this assignment and provide constructive feedback:\n\n${submission.content}` }
                    ]
                });

                const feedback = response.choices[0].message.content;
                const grade = feedback.includes("Excellent") ? "A" :
                              feedback.includes("Good") ? "B" :
                              feedback.includes("Needs Improvement") ? "C" : "D";

                submission.graded = true;
                submission.grade = grade;
                submission.feedback = feedback;
                await submission.save();

                return { studentName: submission.studentName, grade, feedback };
            })
        );

        res.json({ message: "Assignments graded", results: gradedSubmissions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error grading assignments" });
    }
});

export default router;
