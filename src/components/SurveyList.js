import { useState, useEffect } from "react"
import SurveyListItem from "./SurveyListItem"
import './SurveyList.css'
import sortImage from '../images/sort.svg'
import funnel from '../images/funnel.png'
import searchIcon from '../images/search.png'

function SurveyList() {

    // just dummy data, remove after back end is setup
    let surveyList = [
        {
            "name": "Test Name",
            "description": "Test desc",
            "type": "Test type",
            "start-date": "test",
            "end-date": "test",
            "user-id": 1234,
            "other-criteria": "test",
            "image": "test"
        },
        {
            "name": "Test Name",
            "description": "Test desc",
            "type": "Test type",
            "start-date": "test",
            "end-date": "test",
            "user-id": 1234,
            "other-criteria": "test",
            "image": "test"
        }
    ]

    /* let [surveyList, setSurveyList] = useState([])
    
    useEffect(() => {
        // fetch survey list data when component renders for the first time
        async function fetchData() {
            let surveyListData = await fetch('http://localhost:8000/surveyList')
            setSurveyList(surveyListData)
            
            
           chData()
        ]) */


    return <div className="survey-list-container">
        <div className="header">
            <div className="header">
                Survey list
                <span className="icon" ><img className="icon" src={searchIcon} /></span >
                <input type='text' />
            </div>
            <div className="icon">
                <img src={sortImage} />
                <img src={funnel} />
                <button>Create</button>
            </div>
        </div>
        <div className="info-bar">
            {/* 
            The bar above the list of surveys, with text like Name, Description etc 
             */}
            <div>Name</div >
            <div>Description</div >
            <div>Type</div >
            <div>Start Date</div >
            <div>End Date</div >
            <div>Actions</div >
        </div >
        <div className="survey-list">
            <ul>
                {surveyList.map((item, index) => {
                    return <li key={index}>
                        <SurveyListItem listItem={item} />
                    </li>
                })}
            </ul>
        </div>
    </div>

}

export default SurveyList