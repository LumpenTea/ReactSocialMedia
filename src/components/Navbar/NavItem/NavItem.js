import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../NavBar.module.css'

const NavItem = ({ value }) => {

    let margin_style = value === 'friends' ? styles.item_friends : styles.item    
    return (
        <div className={margin_style}>
            <NavLink className={navData => navData.isActive ? styles.active : styles.item}
                to={`/${value}`}>{value[0].toUpperCase() + value.slice(1)}</NavLink>
        </div>
    );
}

export default NavItem