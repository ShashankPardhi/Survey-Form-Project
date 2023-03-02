import './QuestionTable1.css'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import CreateQuestion from './CreateQuestion'

function QuestionTable1() {

    let lastSurveyId = useRef('')

    let [question, setQuestion] = useState({
        questionName: '',
        options: [],
        isMCQ: 'No',
        surveyId: ''
    })

    useEffect(() => {
        async function getAllSurveys() {
            let response = await axios('http://localhost:8000/allSurveys')
            let surveyList = response.data
            let lastSurvey = surveyList.at(-1)
            lastSurveyId.current = lastSurvey._id
        }
        getAllSurveys()
    }, [])

    let [preview, setPreview] = useState(false)
    let [questionList, setQuestionList] = useState([])
    let [optionsText, setOptionText] = useState('')
    let [optionsList, setOptionsList] = useState([])

    // ========================== Adding each question to question list ==========================
    async function addQuestion() {
        setQuestionList([...questionList, { ...question, options: [...optionsList], surveyId: lastSurveyId.current }])
        setOptionsList([])
        await axios.post('http://localhost:8000/addQuestion', { ...question, options: [...optionsList], surveyId: lastSurveyId.current })
    }

    // ========================== Update current question text ==========================
    function changeQuestion(e) {
        setQuestion({ ...question, questionName: e.target.value })
    }

    // ========================== add Option to Current Question ==========================
    function AddOption(e) {
        let temp = optionsList
        temp.push(optionsText)
        setOptionsList([...temp])
    }

    // ========================== delete selected Option from Current Question ==========================
    function removeOption(index) {
        let temp = optionsList
        temp.splice(index, 1)
        setQuestion({ ...question, options: [...temp] })
    }

    // ========================== change current option text ==========================
    function changeOption(e) {
        setOptionText(e.target.value)
    }

    // ========================== change mcq status ==========================
    function changeMCQStatus(index, str) {
        let temp = [...questionList]
        temp[index].isMCQ = str
        setQuestionList([...temp])
        axios.post('http://localhost:8000/mcq', { isMCQ: str })
    }

    return <div className="question-table">
        <CreateQuestion preview={preview} setPreview={setPreview} />
        <ul>
            {/* ========================== display question list ========================== */}
            {questionList.map((questionItem, index) => {
                return <li key={index} className="question-item">
                    <div className='question-item-num'>Q{index + 1}</div>
                    <div className='question-item-question'>
                        {questionItem.questionName}
                    </div>
                    <div className='question-item-options'>
                        {/* ========================== display option list ========================== */}
                        {questionItem.options.map((options_item) => {
                            return <><input type='radio' /> {options_item} <br /></>
                        })}
                    </div>
                    <div className='question-item-msq-option'>
                        Enable Multiple Choice? {questionItem.isMCQ}<br />
                        <button id='mcq-yes' onClick={() => changeMCQStatus(index, 'Yes')}>Yes</button>
                        <button id='mcq-no' onClick={() => changeMCQStatus(index, 'No')}>NO</button> <br />
                    </div>
                </li>
            })}
            {/* ========================== Add New question ========================== */}

            {!preview ? <li>
                Question &nbsp;
                <input type='text' placeholder='Type your question' onChange={e => changeQuestion(e)} /> <br />

                {/* ========================== Add new Option to current question ========================== */}
                <ul>
                    {optionsList.map((item, index) => {
                        return <li key={index}>
                            {item} &nbsp;
                            <button className='remove-Option' onClick={() => removeOption(index)}>Delete</button>
                        </li>
                    })}
                </ul>
                <input type='text' placeholder='Type your option' onChange={e => changeOption(e)} /> &nbsp;
                <button className='add-Option' onClick={AddOption}>Add</button>
                <br />
                <button className='add-Question' onClick={addQuestion}>Add Question</button>
            </li> : <></>}

        </ul>

    </div>
}

export default QuestionTable1