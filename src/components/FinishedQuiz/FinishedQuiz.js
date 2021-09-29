import React from 'react'
import classes from './FinishedQuiz.module.scss'

const FinishedQuiz = props => {

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1.</strong>&nbsp;
          How are you
          <span className={classes.error}>&#10008;</span>
        </li>
        <li>
          <strong>1.</strong>&nbsp;
          How are you
          <span className={classes.success}>&#10004;</span>
        </li>
      </ul>

      <p>Правильно 4 из 10</p>

      <div>
        <button>Повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz