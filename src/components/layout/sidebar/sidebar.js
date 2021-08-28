import { Link } from 'react-router-dom'
import classes from './sidebar.module.css'

function Sidebar(){
    return(
        <div className={classes.sideBar}>
            <ul>
                <li>    
                <Link to="/">All Banks</Link>
                </li>
            </ul>
            
           
        </div>
    )
}

export default Sidebar