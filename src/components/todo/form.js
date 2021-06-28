import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function TodoForm(props) {
  const [item,setItem]=useState({})
  const handleInputChange = e => {
    setItem({...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const newItem = {};
    setItem({newItem});
  };
    return (
      <>
        <h3>Add Item</h3>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </label>
          <label>
            <span>Due Date</span>
            <input type="date" name="date" placeholder="Date" onChange={handleInputChange} />
          </label>
          </Form.Group>
          <Button variant="dark" type="submit">Add Item</Button>
        </Form>
      </>
    );
  
}

export default TodoForm;