import { useState, useEffect } from "react";
import "./upload.css";
import axios from "axios";

export function TeacherDashboard() {
    const [assignment, setAssignment] = useState({
        title: "",
        description: "",
        uploadedBy: "",
        dueDate: "",
    });

    const [assignments, setAssignments] = useState([]); // State to store fetched assignments

    // Fetch assignments from backend
    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const response = await axios.get("http://localhost:5000/teacher/assignments");
                setAssignments(response.data); // Store assignments in state
            } catch (error) {
                console.error("Error fetching assignments:", error);
            }
        };

        fetchAssignments();
    }, []); // Runs once when component mounts

    const handleChange = (e) => {
        setAssignment({ ...assignment, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/teacher/assignments", assignment);
            alert("Assignment uploaded successfully!");
            setAssignment({ title: "", description: "", uploadedBy: "", dueDate: "" });

            // Refresh assignments list after uploading
            const response = await axios.get("http://localhost:5000/teacher/assignments");
            setAssignments(response.data);
        } catch (error) {
            console.error("Error uploading assignment:", error);
        }
    };

    return (
        <div>
            <h2>Upload Assignment</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={assignment.title} onChange={handleChange} required />
                <textarea name="description" placeholder="Description" value={assignment.description} onChange={handleChange} required />
                <input type="text" name="uploadedBy" placeholder="Teacher Name" value={assignment.uploadedBy} onChange={handleChange} required />
                <input type="date" name="dueDate" value={assignment.dueDate} onChange={handleChange} required />
                <button type="submit">Upload</button>
            </form>

            <h2>All Assignments</h2>
            <ul>
                {assignments.length > 0 ? (
                    assignments.map((a, index) => (
                        <li key={index}>
                            <strong>{a.title}</strong> - {a.description} (Due: {a.dueDate})
                        </li>
                    ))
                ) : (
                    <p>No assignments found.</p>
                )}
            </ul>
        </div>
    );
}
