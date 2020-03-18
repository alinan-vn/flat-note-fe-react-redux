import React from 'react';
import NavBar from './Components/NavBar';
import backgroundAbout from './Components/About'
import Home from './Components/Home'
import NewNote  from './Components/NewNote'
import Login from './Components/Login'
import CreateAccount from './Components/CreateAccount'
import { connect } from 'react-redux'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends React.Component {


  home = () => {
    return (
      <Route exact path = '/home' component = { Home } />
    )
  }

  newNote = () => {
    return(
      <Route exact path = '/new-note' component = { NewNote } />
    )
  }


  render(){
    return(
      <Router>
      <div>
        {/* { console.log('will the real Slim Shady please stand up?', this.props.currentUser)} */}
        <NavBar />
        <Route exact path = '/about' component = { backgroundAbout } />

        { this.props.currentUser.id ? this.home() : null }
        { this.props.currentUser.id ? this.newNote() : null }

        <Route exact path = '/login' component={Login} />
        <Route exact path = '/create-account' component={CreateAccount} />
      </div>
    </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(App)
