import './SurveyListItem.css'
import pencil from "../../images/edit_pencil.png"
import trash_can from "../../images/trash_can.png"

function SurveyListItem({ listItem }) {

    async function editSurvey() {
        await fetch(`http://localhost:/8000/edit/${listItem._id}`)
    }

    async function deleteSurvey() {
        await fetch(`http://localhost:/8000/delete/${listItem._id}`)
    }

    return <div className="survey-list-item">
        <div>{listItem.surveyName}</div >
        <div>{listItem.description}</div >
        <div>{listItem.type}</div >
        <div>{listItem["startDate"]}</div >
        <div>{listItem["endDate"]}</div >
        <div className='icon actions'>
            <a href='#'>
                <img src={pencil} onClick={editSurvey} />
            </a>
            <a href='#'>
                <img src={trash_can} onClick={deleteSurvey} />
            </a>
        </div >
    </div>
}

export default SurveyListItem 