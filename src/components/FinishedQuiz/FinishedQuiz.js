import React from 'react'
import classes from './FinishedQuiz.module.scss'

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
        <button onClick={props.onRetry}>Повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz