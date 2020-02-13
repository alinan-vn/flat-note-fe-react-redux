import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
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
      background: 'blue',
      textDecoration: 'none',
      color: 'white'
    }

    return (
      <Menu>
        <NavLink
          to = '/'
          exact
          style = {link}
          activeStyle = {{
            background: 'darkblue'
          }}
        >
          FlatNoteIfy
        </NavLink>
      </Menu>
    )
  }

  // render() {
  //   const { activeItem } = this.state

  //   return (
  //     <Menu secondary>
  //       <Menu.Item
  //         name='FlatNoteIfy'
  //         active={activeItem === 'home'}
  //         onClick={this.handleItemClick}
  //       />
  //       <Menu.Menu position='right'>
  //         <Menu.Item
  //           name='+ New Note'
  //           active={activeItem === 'friends'}
  //           onClick={this.handleItemClick}
  //         />
  //         <Menu.Item
  //           name='login'
  //           active={activeItem === 'logout'}
  //           onClick={this.handleItemClick}
  //         />
  //       </Menu.Menu>
  //     </Menu>
  //   )
  // }
}
