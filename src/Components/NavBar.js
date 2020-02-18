import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class MenuLinks extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name 
    })
  }

  render(){
    const link = {
      width: '100px',
      padding: '12px',
      margin: '0 6px 6px',
      fontWeight: 'bold',
      background: 'azure',
      textAlign: 'center'
    }
    
    return (
      // <Menu color={'grey'} inverted>
      <Menu>
        <NavLink
          to = '/about'
          exact
          style = {link}
          className = "ui menu"
          activeStyle = {{
            background: 'aquamarine'
          }}
        >
          FlatNoteIfy
        </NavLink>
        <NavLink
          to = '/home'
          exact
          style = {link}
          className = "ui menu"
          activeStyle = {{
            background: 'aquamarine'
          }}
        >
          { this.props.currentUser.id ? 'Dashboard' : '' }
        </NavLink>
        <Menu.Menu position='right'>
        <NavLink
          to = '/new-note'
          exact
          style = {link}
          className = "ui menu"
          activeStyle = {{
            background: 'aquamarine'
          }}
        >
          { this.props.currentUser.id ? '+ New Note' : '' }
        </NavLink>
        <NavLink
          to = '/login'
          exact
          style = {link}
          className = "ui menu"
          activeStyle = {{
            background: 'aquamarine'
          }}
        >
          Login
        </NavLink>
        </Menu.Menu>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(MenuLinks)