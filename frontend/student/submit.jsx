import { useState } from "react";
import axios from "axios";

export function SubmitAssignment() {
    const [content, setContent] = useState("");

    const submitAssignment = async () => {
        try {
            await axios.post("http://localhost:3000/students/submit", {
                studentName: "John Doe",
                studentId: "S123",
                assignmentId: "A1",
                content
            });
            alert("Assignment submitted successfully!");
        } catch (error) {
            console.error("Error submitting assignment:", error);
            alert("Failed to submit assignment.");
        }
    };

    return (
        <div>
            <textarea placeholder="Enter your answer..." value={content} onChange={(e) => setContent(e.target.value)} />
            <button onClick={submitAssignment}>Submit</button>
        </div>
    );
}
