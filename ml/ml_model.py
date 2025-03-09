import pickle
import numpy as np
from flask import Flask, request, jsonify
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

app = Flask(__name__)

# Sample Training Data: Assignments and Grades
X_train = [
    "The Industrial Revolution began in the 18th century. It led to major changes in agriculture, manufacturing, and transportation.",
    "Photosynthesis is the process in which plants use sunlight to make food. This process takes place in the chloroplasts of plant cells.",
    "The Great Depression started in 1929 due to a stock market crash. Millions of people lost jobs, and economies collapsed worldwide.",
    "Albert Einstein developed the theory of relativity, which transformed our understanding of space and time.",
    "The causes of World War I include militarism, alliances, imperialism, and nationalism. The assassination of Archduke Franz Ferdinand triggered the war."
]

# Corresponding Grades (Labels)
y_train = ["A", "B", "C", "A+", "B+"]  

# Train the Model
vectorizer = TfidfVectorizer()
X_train_tfidf = vectorizer.fit_transform(X_train)

model = LogisticRegression()
model.fit(X_train_tfidf, y_train)

# Save the model
with open("grading_model.pkl", "wb") as f:
    pickle.dump((vectorizer, model), f)

@app.route("/grade", methods=["POST"])
def grade_assignment():
    data = request.json
    assignment_text = data.get("assignmentText", "")

    if not assignment_text:
        return jsonify({"error": "No assignment text provided"}), 400

    # Load the saved model
    with open("grading_model.pkl", "rb") as f:
        vectorizer, model = pickle.load(f)

    # Transform input and predict grade
    X_input = vectorizer.transform([assignment_text])
    predicted_grade = model.predict(X_input)[0]

    return jsonify({"grade": predicted_grade, "feedback": generate_feedback(predicted_grade)})

def generate_feedback(grade):
    feedback_dict = {
        "A+": "Excellent work! Your response is clear, well-structured, and highly informative.",
        "A": "Great job! A well-explained answer with good examples.",
        "B+": "Good effort! Try adding more details and examples for clarity.",
        "B": "Decent attempt! Needs more depth and better structure.",
        "C": "Needs improvement. Work on clarity and include more supporting information."
    }
    return feedback_dict.get(grade, "No feedback available.")

if __name__ == "__main__":
    app.run(port=5001, debug=True)
