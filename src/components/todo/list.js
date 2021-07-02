import React from 'react';
import If from './IF.js'
import { useState } from 'react';
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import{Toast} from "react-bootstrap";
import {SettingsContext} from './settings-context';
import {  Pagination } from  'react-bootstrap'
import { useContext } from 'react';
function TodoList(props) {
const [flag , setFlag ] = useState(false);
const [id , setId] = useState ('')

let list = props.list
const context = useContext(SettingsContext)

const maxItems = context.itemPerPage;

const [currentPage, setCurrentPage] = useState(1);
if (context.completed){
  list = list.filter((task) => !task.complete);
}

  
const last = currentPage * context.itemPerPage;
const first = last - context.itemPerPage;

if (context.sortBy === 'difficulty'){
  list.sort ((a,b)=> {
    if (a.difficulty && b.difficulty){
      if (a.difficulty > b.difficulty) return 1
      else if (a.difficulty < b.difficulty) return -1
      else if (a.difficulty === b.difficulty) return 0
    }
  })
}
else if (context.sortBy === 'assignee'){
  list.sort ((a,b)=> {
    if (a.assignee && b.assignee){
      if (a.assignee.toLowerCase()  > b.assignee.toLowerCase() ) return 1
      else if (a.assignee.toLowerCase() < b.assignee.toLowerCase() ) return -1
      else if (a.assignee.toLowerCase()  === b.assignee.toLowerCase() ) return 0
    }
  })
}
else if (context.sortBy === 'text'){
  list.sort ((a,b)=> {
    if (a.text && b.text){
      if (a.text.toLowerCase()  > b.text.toLowerCase() ) return 1
      else if (a.text.toLowerCase() < b.text.toLowerCase() ) return -1
      else if (a.text.toLowerCase()  === b.text.toLowerCase() ) return 0
    }
  })
}
 
let currentTasks = list.slice(first, last);
let numOfPages =(list.length / maxItems )
context.setTaskSum(list.length);
// let  numOfPages = list.length / maxItems + 1;

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

 

  
  let active = currentPage;
  let items = [];
  for (let number = 1; number <= numOfPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }



    return (
      <>
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
        {currentTasks.map(item => (
        <Toast  
        key={item._id}
        style={{ minWidth: '200px',maxWidth:'50%' }}
        onClose={() => props.deleteItem(item._id)} value={item._id}

        >
           <Toast.Header>
           <Badge pill variant={item.complete ? 'danger' : 'success'} > {item.complete ? 'completed' : 'pending'} </Badge>{' '}
        
            <strong className="mr-auto ml-4" >  {item.assignee}  </strong>
          
            
          </Toast.Header>

          <Toast.Body onClick={() => props.handleComplete(item._id)} style={{ cursor: 'pointer' }}>
            <h3 className={`ml-3 ${item.complete ? 'text-muted text-decoration-line-through' : ''}`}>{item.text}</h3>
            <br />
            <p className="float-right" style={{ fontSize: '90%' }}>
              Difficulty: {item.difficulty}
            </p>
            <br />
            <Button variant="warning" onClick={()=>toggle(item._id)} value={item._id}>Edit</Button>{' '}
          </Toast.Body>
           
        
          </Toast>
        ))}
     <Pagination>
            <Pagination.Prev
              disabled={active === 1 ? true : false}
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            />
            {items}
            <Pagination.Next
              disabled={active > numOfPages - 1 ? true : false}
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            />
          </Pagination>
     

  </>

     
    );

}

export default TodoList;