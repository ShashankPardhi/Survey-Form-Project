import './Sidebar.css'
import homeIcon from '../../images/home.png'
import peopleIcon from '../../images/people.png'
import listIcon from '../../images/list.png'

function SideBar() {
    return <div className="side-bar">
        <img src={homeIcon} />
        <img src={peopleIcon} />
        <img src={listIcon} />
    </div>
}

export default SideBar