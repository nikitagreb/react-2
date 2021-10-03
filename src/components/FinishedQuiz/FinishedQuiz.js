import React from 'react'
import classes from './FinishedQuiz.module.scss'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'

const FinishedQuiz = props => {

  const successCnt = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }

    return total
  }, 0)

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {

          return (
            <li key={index}>
              <strong>{index + 1}.</strong>&nbsp;
              {quizItem.question}
              {
                props.results[quizItem.id] === 'error'
                  ? <span className={classes.error}>&#10008;</span>
                  : <span className={classes.success}>&#10004;</span>
              }
            </li>
          )

        })}
      </ul>

      <p>Правильно {successCnt} из {props.quiz.length}</p>

      <div>
        <Button onClick={props.onRetry} type={"primary"}>Повторить</Button>
        <Link to={'/'}>
          <Button type={"success"}>Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  )
}

export default FinishedQuiz