import './SurveyListItem.css'
import pencil from "../../images/edit_pencil.png"
import trash_can from "../../images/trash_can.png"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function SurveyListItem({ listItem }) {

    const navigate = useNavigate()
    let [viewQuestions, setViewQuestions] = useState(false)
    let [questionList, setQuestionList] = useState([])

    async function deleteSurvey() {
        await axios.delete(`http://localhost:8000/delete/${listItem._id}`)
        window.location.reload()
        // navigate('/dashboard')
    }

    // toggle view of survey questions
    async function viewSurvey() {
        setViewQuestions(prev => !prev)
        if (viewQuestions) {
            let response = await axios.get(`http://localhost:8000/questionList/${listItem._id}`)
            let questionList = response.data
            setQuestionList(questionList)
        }
    }

    return <>
        <div className="survey-list-item">
            <div>{listItem.surveyName}</div >
            <div>{listItem.description}</div >
            <div>{listItem.type}</div >
            <div>{listItem["startDate"]}</div >
            <div>{listItem["endDate"]}</div >
            <div className='icon actions'>
                {/* <a href='#'>
                <img src={pencil} onClick={editSurvey} />
            </a> */}
                <button onClick={viewSurvey}>
                    {viewQuestions ? 'Close' : 'View'}
                </button>
                <a href='#'>
                    <img src={trash_can} onClick={deleteSurvey} />
                </a>
            </div >
        </div>

        {viewQuestions ? <div className='survey-questions'>
            <ul>
                {questionList.map((question_item, index) => {
                    return <li key={index}>
                        Question: {question_item.questionName}
                        {question_item.options.map((options_item) => {
                            return <>
                                &nbsp;<input type='radio' />{options_item}
                            </>
                        })}
                    </li>
                })}
            </ul>
        </div> : <></>}
    </>
}

export default SurveyListItem 