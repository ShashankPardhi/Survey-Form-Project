import React, { useState, useEffect } from "react"
import './CreateSurvey.css'
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const CreateSurvey = () => {
    // ======================= Log out functionality =======================
    const navigate = useNavigate()
    function logout() {
        navigate('/login')
        localStorage.removeItem("isLoggedIn")
    }

    // ======================= Taking user input =======================
    let [newSurvey, setNewSurvey] = useState({
        surveyName: "",
        description: "",
        type: "",
        startDate: "",
        endDate: "",
        otherCriteria: "",
        image: ""
    })
    function ChangeSurveyName(e) {
        let value = e.target.value
        setNewSurvey({ ...newSurvey, surveyName: value })
    }
    function ChangeDescription(e) {
        let value = e.target.value
        setNewSurvey({ ...newSurvey, description: value })
    }
    function ChangeType(e) {
        let value = e.target.value
        setNewSurvey({ ...newSurvey, type: value })
    }
    function ChangeStartDate(e) {
        let value = e.target.value
        setNewSurvey({ ...newSurvey, startDate: value })
    }
    function ChangeEndDate(e) {
        let value = e.target.value
        setNewSurvey({ ...newSurvey, endDate: value })
    }
    function ChangeOtherCriteria(e) {
        let value = e.target.value
        setNewSurvey({ ...newSurvey, otherCriteria: value })
    }
    function ChangeImage(e) {
        /* let value = e.target.value
        setNewSurvey({ ...newSurvey, image: value }) */
    }

    // ======================= Send survey todatabase =======================
    function addSurvey() {
        axios.post('http://localhost:8000/newSurvey', newSurvey)
            .then(() => {
                navigate('/createQuestions')
            })
    }

    // ======================= Change image to string =======================
    function convertImage(event) {
        let file = event.target.files[0]
        let reader = new FileReader()
        reader.onloadend = function () {
            setNewSurvey({ ...newSurvey, image: reader.result })
        }
        reader.readAsDataURL(file)
    }

    // ======================= Rendered Output =======================
    return (
        <div>
            <nav className='navbar'>
                <div className='logo'>LOGO</div>
                {/* <div className='userprofile'></div> */}
                <div className="log-out" onClick={logout}>LogOut</div>
            </nav>

            <nav className='sidebar'>
                <div className='homediv'> <AiFillHome className='home' /> </div>
                <div className='groupdiv'> <AiOutlineTeam className='group' /> </div>
                <div className='taskdiv'> <FaList className='task' /> </div>
            </nav>

            <header className="createhead">
                <h1>Create Survey</h1>
                <div>
                    <Link to="/dashboard">
                        <button className="cancelbtn">Cancel</button>
                    </Link>
                    <button className="nextbtn" onClick={addSurvey}>Next</button>
                </div>
            </header>

            <main>
                <div className="main1">
                    <div>
                        <h2>Name</h2>
                        <input id="namein" type="text" placeholder="Name here" name="surveyName" onChange={(e) => ChangeSurveyName(e)} />
                    </div>
                    <div>
                        <h2>Start Date</h2>
                        <input id="datein" type="date" onChange={(e) => ChangeStartDate(e)} />
                    </div>
                    <div>
                        <h2>End Date</h2>
                        <input id="datein" type="date" onChange={(e) => ChangeEndDate(e)} />
                    </div>
                </div>
                <div className="main2">
                    <div>
                        <h2>Description</h2>
                        <input id="descin" type="text" placeholder="Description" onChange={(e) => ChangeDescription(e)} />
                    </div>
                    <div>
                        <h2>Other Criteria</h2>
                        <input id="critin" type="text" placeholder="Enter Here" onChange={(e) => ChangeOtherCriteria(e)} />
                    </div>
                </div>
                <div className="main3">
                    <div>
                        <h2>Type of Survey</h2>
                        <select name="Select" id="surveyselect" onChange={(e) => ChangeType(e)}>
                            <option value="select">select</option>
                            <option value="Video">Video</option>
                            <option value="Image">Image</option>
                            <option value="Text">Text</option>
                        </select>
                    </div>
                    <div>
                        <h2>Upload Image</h2>
                        <label id="uploadlabel" htmlFor="upload" onChange={(e) => convertImage(e)}>
                            Drag and drop to Upload
                            <input type="file" id="upload" />
                        </label>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default CreateSurvey