import React, {Component} from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

    state = {
        quiz: [
            {
                question: 'Какого цвета небо',
                rightAnswerId: 3,
                answers: [
                    {text: 'Синий', id: 1},
                    {text: 'Белый', id: 2},
                    {text: 'Голубой', id: 3},
                    {text: 'Красный', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        console.log('Answer Id: ', answerId)
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[0].answers}
                        question={this.state.quiz[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz