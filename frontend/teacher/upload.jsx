import { useState } from "react";
import axios from "axios";

export function UploadAssignment() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const uploadAssignment = async () => {
        try {
            await axios.post("http://localhost:3000/teachers/upload", {
                title,
                description,
                uploadedBy: "teacher123",
                dueDate: "2025-04-10"
            });
            alert("Assignment uploaded successfully!");
        } catch (error) {
            console.error("Error uploading assignment:", error);
            alert("Failed to upload assignment.");
        }
    };

    return (
        <div>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={uploadAssignment}>Upload Assignment</button>
        </div>
    );
}
