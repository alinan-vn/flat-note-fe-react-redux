import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class MenuExampleSecondary extends Component {
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
      // textDecoration: 'none',
      // color: 'white'
    }
    

    return (
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
          Dashboard
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
          + New Note
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