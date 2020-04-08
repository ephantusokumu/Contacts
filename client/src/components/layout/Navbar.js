import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
 
export const Navbar = ({title, icon}) => {
    return (
        <div className="navbar bg-primary">
            <hi> <i className={icon}/> {title}</hi>  
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                </ul>          
        </div>
    )
} 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}
Navbar.defaultProps = {
    title: 'Your Contacts',
    icon:'fas fa-id-card-alt'
}