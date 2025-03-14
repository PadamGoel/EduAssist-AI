require('dotenv').config();
const mongoose = require("mongoose");
const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri);

const teacherSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Hashed password stored here
    role: { type: String, enum: ["teacher", "student"], required: true }
    // agreedToTerms: { type: Boolean, required: true },
  });
  
  const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["teacher", "student"], required: true }
    //agreedToTerms: { type: Boolean, required: true },
  });

const assignmentSchema = new mongoose.Schema({
    title: String,
    description: String,
    uploadedBy: String, // Teacher ID
    dueDate: Date
});

const submissionSchema = new mongoose.Schema({
    studentName: String,
    studentId: String,
    assignmentId: mongoose.Schema.Types.ObjectId,
    content: String, // The submitted text or link to file
    submittedAt: { type: Date, default: Date.now },
    graded: { type: Boolean, default: false },
    grade: String,
    feedback: String
});

const Submission = mongoose.model("Submission", submissionSchema);
const Assignment = mongoose.model("Assignment", assignmentSchema);
const Teacher = mongoose.model("Teacher", teacherSchema);
const Student = mongoose.model("Student", studentSchema)

module.exports = {
    Teacher,
    Student,
    Assignment,
    Submission
}