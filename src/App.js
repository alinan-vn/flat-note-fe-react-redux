import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './Components/NavBar';
import backgroundAbout from './Components/About'
import Home from './Components/Home'
import { NewNote } from './Components/NoteForm'
import Login from './Components/Login'


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path = '/about' component = { backgroundAbout } />
        <Route exact path = '/home' component = { Home } />
        <Route exact path = '/new-note' component = { NewNote } />
        <Route exact path = '/login' component = { Login } />
      </div>
    </Router>
  );
};

export default App
