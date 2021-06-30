// import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import useForm from'../../hooks/useForm'
import { Card } from 'react-bootstrap';
import ContentSetting from './settings.jsx'

function TodoForm(props) {

  const [handleInputChange , handleSubmit] = useForm(callback);


  function callback (item){
    props.handleSubmit(item);

  }

    return (
      <>
      <Card style={{'margin-left':'40px','margin-right':'40px'}}>
      <Card.Header as="h3">Add To Do Item</Card.Header>
      <Card.Body>
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
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} style={{'color':'#227aff'}} />
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
          <Button variant="primary" type="submit">Add Item</Button>
        </Form>
        </Card.Body>
        </Card>
        <ContentSetting />
      </>
    );
  
}

export default TodoForm;