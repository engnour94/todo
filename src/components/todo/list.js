import React from 'react';
import If from './IF.js'
import { useState } from 'react';
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
function TodoList(props) {
const [flag , setFlag ] = useState(false);
const [id , setId] = useState ('')
const toggle = (id) =>{
  setFlag (!flag);
  setId (id)
}

const editor =e=>{
 e.preventDefault();
 toggle (id);
 let newUpdate = e.target.text.value
 props.editor (newUpdate , id)
}
    return (
      <>

       
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item
            className={`complete-${item.complete.toString()}`}
            key={item._id}
            action
            variant={item.complete ? "warning" : "dark"}
          >
              <Button variant="warning" onClick={()=>toggle(item._id)} value={item._id}>Edit</Button>{' '}
            {/* <button onClick={()=>toggle(item._id)} value={item._id}>Edit</button> */}
            <Button variant="dark"  id="delete" onClick={() => props.deleteItem(item._id)} >X</Button>{' '}
            {/* <button id="delete" onClick={() => props.deleteItem(item._id)} >X</button> */}
            <span onClick={() => props.handleComplete(item._id)}>
                  {`     ${item.text}`} by {item.assignee} with difficulty {item.difficulty}, Due Date {item.date}
            </span>
            
          </ListGroup.Item>
        ))}
      </ListGroup>
      <If condition={flag}>
      <Form onSubmit= {editor}>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>
      <span>Edit Task</span>
      <Form.Control  type="text" name="text"   />
      </Form.Label>
      </Form.Group>
    
      <  Button variant="warning" type="submit" >Submit Edit</Button>
      </Form>
  </If>
  </>

     
    );

}

export default TodoList;