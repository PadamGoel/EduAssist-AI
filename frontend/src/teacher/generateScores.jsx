import axios from "axios";
import { useState } from "react";

export function GradeAssignments() {
    const [grades, setGrades] = useState([]);

    const gradeAssignments = async () => {
        try {
            const response = await axios.post("http://localhost:3000/grading/grade");
            setGrades(response.data.results);
            alert("Assignments graded successfully!");
        } catch (error) {
            console.error("Error grading assignments:", error);
            alert("Failed to grade assignments.");
        }
    };

    return (
        <div>
            <button onClick={gradeAssignments}>Generate Scores</button>
            {grades.length > 0 && (
                <div>
                    <h3>Grading Results:</h3>
                    <ul>
                        {grades.map((result, index) => (
                            <li key={index}>
                                {result.studentName}: {result.grade} - {result.feedback}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
