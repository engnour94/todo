import React  , {useContext} from 'react';
import NavBar from './components/todo/header';
import ToDo from './components/todo/todo-connected';
import If from './components/todo/IF.js'
import { AuthContext } from './components/todo/auth-context.jsx';
export default function App() {
  const context  = useContext(AuthContext);
    return (
      <>
        <NavBar />
        <If condition={context.loggedIn}>
          <ToDo />
        </If>
      </>
    );

}


