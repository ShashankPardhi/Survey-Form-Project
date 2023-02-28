import { useState, useEffect } from "react"
import SurveyListItem from "./SurveyListItem"
import SideBar from "./SideBar"
import './SurveyList.css'
import sortImage from '../../images/sort.svg'
import funnel from '../../images/funnel.png'
import searchIcon from '../../images/search.png'


function SurveyList() {

    // just dummy data, remove after back end is setup
    let surveyListJson = require('./dummyData.json')
    let surveyList = surveyListJson["data"]

    /* let [surveyList, setSurveyList] = useState([])
    
    useEffect(() => {
        // fetch survey list data when component renders for the first time
        async function fetchData() {
            let surveyListData = await fetch('http://localhost:8000/surveyList')
            setSurveyList(surveyListData)
 
        ]) */

    // for search text
    let [searchText, setSearchText] = useState('')
    async function startSearchText() {
        if (searchText !== '') {
            let searchResultData = await fetch(`http://localhost:8000/search/${searchText}`)
            // let searchResult = await searchResultData.json()
            // setSurveyList(searchResult)
        }

    }

    // for sorting post
    async function sortSurvey() {
        if (searchText !== '') {
            let searchResultData = await fetch(`http://localhost:8000/sort`)
            // let searchResult = await searchResultData.json()
            // setSurveyList(searchResult)
        }

    }

    // create new survey
    // put front end link for creating survey page here
    function createSurvey() {
        // fetch('http://localhost:3000/')
    }

    return <div className="container">
        <SideBar />
        <div className="survey-list-container">
            <div className="header">
                <div className="header">
                    Survey list
                    <span className="icon" >
                        <img src={searchIcon} />
                    </span >
                    <input type='text' onChange={(e) => setSearchText(e.target.value)} />
                </div>
                <div className="icon">
                    <img src={sortImage} onClick={sortSurvey} />
                    <img src={funnel} onClick={startSearchText} />
                    <button onClick={createSurvey}>Create</button>
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

    </div>

}

export default SurveyList