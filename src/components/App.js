import "./../styles/App.css";
import React, { useState } from "react";

function DynamicForm() {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  const handleChange = (index, event) => {
    const values = [...fields];
    values[index][event.target.name] = event.target.value;
    setFields(values);
  };

  const handleAdd = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  const handleRemove = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", fields);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <h2>Dynamic Fields Form</h2>

      {fields.map((field, index) => (
        <div
          key={index}
          style={{
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={field.name}
            onChange={(event) => handleChange(index, event)}
            style={{ marginRight: "10px" }}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={field.age}
            onChange={(event) => handleChange(index, event)}
            style={{ marginRight: "10px" }}
          />
          <button type="button" onClick={() => handleRemove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAdd} style={{ marginRight: "10px" }}>
        Add More..
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
