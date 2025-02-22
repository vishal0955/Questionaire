// DynamicForm.js
import React, { useState } from "react";
import Question from "./Question";

const DynamicForm = () => {
  const [questions, setQuestions] = useState([
    { id: 1, question: "", answerType: "Text", placeholder: "", min: "", max: "" }
  ]);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle adding a new question
  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { id: Date.now(), question: "", answerType: "Text", placeholder: "", min: "", max: "" }
    ]);
  };

  // Handle removing a question
  const handleRemoveQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  // Handle input changes
  const handleInputChange = (id, field, value) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, [field]: value } : q)));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(questions);
    setSuccessMessage("Form Submitted Successfully!");
    setQuestions([{ id: 1, question: "", answerType: "Text", placeholder: "", min: "", max: "" }]);
  };

  return (
    <div>
      <h1>Dynamic Question Form</h1>

      {questions.map((question) => (
        <Question
          key={question.id}
          question={question}
          onChange={handleInputChange}
          onRemove={handleRemoveQuestion}
        />
      ))}

      <button onClick={handleAddQuestion}>Add Question</button>
      <br />
      <button onClick={handleSubmit}>Submit</button>

      {successMessage && <div>{successMessage}</div>}
    </div>
  );
};

export default DynamicForm;
