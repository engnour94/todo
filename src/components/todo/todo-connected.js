
import React, { useEffect} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../../hooks/useAjax';
import Acl from './acl.jsx'
import ContentSetting from './settings'
// import{Navbar} from "react-bootstrap";
import './todo.scss';


// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
const ToDo = () => {
  const [list,_getTodoItems  , _toggleComplete , _addItem ,deleteItem,editor]= useAjax();
 
useEffect (_getTodoItems , [_getTodoItems]);
  
document.title = `ToDo : ${list.filter((item) => !item.complete).length}`;
  return (
     <>
     

    <header >
      
        <h2  style={{'font-size':'20px', 'maxWidth':'90%', 'margin-top':'10px',"background":"#353a40" , 'margin-right':'auto','margin-left':'auto','color':'white','hight':'300px','padding':'10px' }}>
        {`To Do List Manager ( ${list.filter(item => !item.complete).length} )  `} 
        </h2>
      </header>
 


      <section className="todo">

      <Acl capability="create">
        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>
        </Acl>
          <div>
          <Acl capability="read">
          <ContentSetting />
        </Acl>
          </div>
        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            deleteItem = {deleteItem}
            editor = {editor}
    
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;