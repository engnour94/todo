import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';

function ToDo(props) {
  const [list,setList]=useState([])
  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList( [...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }

  };
   
  const editor = (text , id)=>{
    let item = list.filter ((item)=> item._id === id)[0] || {}
    if (item) {
      item.text = text;
      let newList = list.map (itm =>{
        if (itm._id === id ){
          return item 
        }else {
          return itm
        }
      })
      setList (newList)
    }
    }


  const deleteItem = (id) => {
    let newList = list.filter((i) => i._id !== id) || {};
    setList(newList);
  };
  useEffect(() =>{
    let newList1 = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];
    setList(newList1);
  },[])
  

  useEffect(() => {
  document.title = `ToDo ${
      list.filter((item) => !item.complete).length
    }`;
  }, [list]);


    return (
      <>
        <header>
          <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </header>

        <section className="todo">
       
          <div>
            <TodoForm handleSubmit={addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
              deleteItem={deleteItem}
              editor = {editor}
            />
          </div>
        </section>
      </>
    );

}

export default ToDo;

