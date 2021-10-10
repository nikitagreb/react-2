import React, {Component} from 'react'
import classes from './Drawer.module.scss'
import BackDrop from '../../UI/BackDrop/BackDrop'
import {NavLink} from 'react-router-dom'

class Drawer extends Component {

  clickHandler = () => {
    this.props.onClose()
  }

  renderLinks(links) {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    const cls = [classes.Drawer]

    if (!this.props.isOpen) {
      cls.push(classes.close)
    }

    const links = this.props.isAuthenticated ?
      [
        {to: '/quiz-creator', label: 'Создать тест', exact: false},
        {to: '/', label: 'Список', exact: true},
        {to: '/logout', label: 'Выйти', exact: false},
      ] :
      [
        {to: '/', label: 'Список', exact: true},
        {to: '/auth', label: 'Авторизация', exact: false},
      ]

    return (
      <>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks(links)}
          </ul>
        </nav>
        {this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
      </>
    )
  }
}

export default Drawer