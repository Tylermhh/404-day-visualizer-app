import React, { useState } from "react";

function Form(props) {
    const [task, setTask] = useState({
        name: "",
        category: "",
        completed: false,
    });

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "category")
            setTask({ name: task["name"], category: value });
        else setTask({ name: value, category: task["category"] });
    }

    function submitForm() {
        props.handleSubmit(task);
        setTask({ name: "", category: "" });
    }

    return (
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={task.name}
            onChange={handleChange}
          />
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            value={task.category}
            onChange={handleChange}
          />
          <input type="button" value="Submit" onClick={submitForm} />
        </form>
      );
}

export default Form;