import './Sidebar.css'
import {NavLink} from 'react-router-dom'

function Sidebar() {
    return (
        <div className='wrapper-icon'>
            <NavLink
                exact
                to="/"
                activeClassName='activeIcon'
            >
                <i className="material-icons large icon">search</i>
            </NavLink>
            <NavLink
                to="/bookmarks"
                activeClassName='activeIcon'
            >
                <i className="material-icons large icon">star</i>
            </NavLink>
        </div>
    )
}

export default Sidebar