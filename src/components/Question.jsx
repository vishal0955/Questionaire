import React, { useState } from "react";
import InputField from "./inputField";


const Question = ({ question, onChange, onRemove }) => {
  const [options, setOptions] = useState([]);

  const handleInputChange = (field, value) => {
    onChange(question.id, field, value);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = options.map((option, i) => (i === index ? value : option));
    setOptions(newOptions);
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <label>Question</label>
      <input
        type="text"
        placeholder="Enter your question"
        value={question.question}
        onChange={(e) => handleInputChange("question", e.target.value)}
      />
      <br />
      <label>Answer Type</label>
      <select
        value={question.answerType}
        onChange={(e) => handleInputChange("answerType", e.target.value)}
      >
        {["Text", "Textarea", "Number", "Dropdown", "Radio", "Checkbox", "Slider"].map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <br />
      <label>Option</label>
      <input
        type="text"
        placeholder="placeholder"
        value={question.placeholder}
        onChange={(e) => handleInputChange("placeholder", e.target.value)}
      />
      <br />
      {["Number", "Slider"].includes(question.answerType) && (
        <>
          <label>Min Value</label>
          <input
            type="number"
            placeholder="min"
            value={question.min}
            onChange={(e) => handleInputChange("min", e.target.value)}
          />
          <br />
          <label>Max Value</label>
          <input
            type="number"
            placeholder="max"
            value={question.max}
            onChange={(e) => handleInputChange("max", e.target.value)}
          />
          <br />
        </>
      )}
      <InputField
        id={question.id}
        type={question.answerType}
        placeholder={question.placeholder}
        min={question.min}
        max={question.max}
        onChange={(e) => handleInputChange("value", e.target.value)}
      />
      <br />
      <label>Options</label>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          <button onClick={() => removeOption(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addOption}>Add Option</button>
      <br />
      <button onClick={() => onRemove(question.id)}>Remove Question</button>
    </div>
  );
};

export default Question;