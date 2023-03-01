import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SurveyListItem from "./SurveyListItem"
import SideBar from "./SideBar"
import './SurveyList.css'
import sortImage from '../../images/sort.svg'
import funnel from '../../images/funnel.png'
import searchIcon from '../../images/search.png'
import axios from 'axios'

function SurveyList() {

    const navigate = useNavigate()

    // ================================= Check if user is logged in =================================
    useEffect(() => {
        let loginStatus = localStorage.getItem("isLoggedIn")
        if (loginStatus === null) {
            // user not logged in, redirect to login page
            navigate('/')
        }
    }, [])

    // ================================= Fetch surveys from database =================================
    let [surveyList, setSurveyList] = useState([])
    useEffect(() => {
        async function fetchSurveys() {
            let response = await axios.get('http://localhost:8000/allSurveys')
            let surveyList = await response.data
            setSurveyList(surveyList)
        }
        fetchSurveys()
    }, [])

    // ================================= Search survey name =================================
    let [searchText, setSearchText] = useState('')
    async function startSearchText() {
        if (searchText !== '') {
            let response = await axios.post(`http://localhost:8000/search`, {
                word: searchText
            })
            let searchResult = response.data
            setSurveyList(searchResult)
        } else {
            let response = await axios.get(`http://localhost:8000/allSurveys`)
            let searchResult = response.data
            setSurveyList(searchResult)
        }

    }
    // ================================= Sort surveys by name =================================
    async function sortSurvey() {
        let response = await axios.get(`http://localhost:8000/sort`)
        let searchResult = response.data
        setSurveyList(searchResult)
    }

    // ================================= Redirect to Create Survey Page =================================
    function createSurvey() {
        navigate()
    }

    // ================================= Log Out user =================================
    function logOut() {
        navigate('/')
        localStorage.removeItem("isLoggedIn")
    }

    return <div className="container">
        <SideBar />
        <div className="survey-list-container">
            <div className="nav-bar">
                <div className="logo">LOGO</div>
                <div className="log-out" onClick={logOut}>Log Out</div>
            </div>

            <div className="header">
                <div className="header">
                    Survey list
                    <span className="icon" >
                        <img src={searchIcon} />
                    </span >
                    <input type='text' onChange={(e) => setSearchText(e.target.value)} />
                </div>

                <div className="icon">
                    <button onClick={startSearchText}>Search</button>
                    <button onClick={sortSurvey}>Sort</button>
                    {/* <img src={sortImage} onClick={sortSurvey} />
                    <img src={funnel} onClick={startSearchText} /> */}
                    <button onClick={createSurvey}>Create</button>
                </div>
            </div>

            <div className="info-bar">
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