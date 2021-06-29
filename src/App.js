import React from 'react';
import NavBar from './components/todo/header';
import ToDo from './components/todo/todo-connected';

export default function App() {

    return (
      <>
        <NavBar />
        <ToDo />
      </>
    );

}