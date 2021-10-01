import React from 'react'
import classes from './MenuToggle.module.scss'

const MenuToggle = props => {

  const cls = [
    classes.MenuToggle
  ]

  if (props.isOpen) {
    cls.push(classes.open)
  }

  return (
    <>
      {
        props.isOpen
        ? <span className={cls.join(' ')} onClick={props.onToggle}>&#10006;</span>
        : <span className={cls.join(' ')} onClick={props.onToggle}>&#9776;</span>
      }
    </>
  )
}

export default MenuToggle