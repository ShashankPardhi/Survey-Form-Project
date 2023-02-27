import './SurveyListItem.css'
import pencil from "../images/edit_pencil.png"
import trash_can from "../images/trash_can.png"

function SurveyListItem({ listItem }) {
    return <div className="survey-list-item">
        <div>{listItem.name}</div >
        <div>{listItem.description}</div >
        <div>{listItem.type}</div >
        <div>{listItem["start-date"]}</div >
        <div>{listItem["end-date"]}</div >
        <div className='icon actions'>
            <a href='#'>
                <img src={pencil} />
            </a>
            <a href='#'>
                <img src={trash_can} />
            </a>
        </div >
    </div>
}

export default SurveyListItem 