
import React from "react";

const InputField = ({ id, type, placeholder, min, max, onChange }) => {
  switch (type) {
    case "Text":
      return <input type="text" id={id} placeholder={placeholder} onChange={onChange} />;
    case "Textarea":
      return <textarea id={id} placeholder={placeholder} onChange={onChange}></textarea>;
    case "Number":
      return <input type="number" id={id} min={min} max={max} placeholder={placeholder} onChange={onChange} />;
    case "Dropdown":
      return <select id={id} onChange={onChange}><option value="option1">Option 1</option></select>;
    case "Radio":
      return (
        <div>
          <input type="radio" id={id} name={`question-${id}`} onChange={onChange} /> Option 1
          <input type="radio" id={id} name={`question-${id}`} onChange={onChange} /> Option 2
        </div>
      );
    case "Checkbox":
      return <input type="checkbox" id={id} onChange={onChange} />;
    case "Slider":
      return <input type="range" id={id} min={min} max={max} onChange={onChange} />;
    default:
      return null;
  }
};

export default InputField;
