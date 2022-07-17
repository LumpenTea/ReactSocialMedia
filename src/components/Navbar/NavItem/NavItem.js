import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../NavBar.module.css'

const NavItem = ({ value }) => {

    let navItem = (
        <div className={styles.item}>
            <NavLink className={navData => navData.isActive ? styles.active : styles.item}
                to={`/${value}`}>{value[0].toUpperCase() + value.slice(1)}</NavLink>
        </div>
    );

    let navItemFriends = (
        <div className={styles.item_friends}>
            <NavLink className={navData => navData.isActive ? styles.active : styles.item}
                to={`/${value}`}>{value[0].toUpperCase() + value.slice(1)}</NavLink>
            <div>
                <img src='https://media.istockphoto.com/photos/portrait-of-creative-trendy-black-african-male-designer-laughing-picture-id1296158947?k=20&m=1296158947&s=612x612&w=0&h=qh89sBTcLTUuuOZMMUwMrbfnWqERRyZch9R6Z74S9Lc='></img>
                <img src='https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls='></img>
                <img src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'></img>
            </div>
        </div>
    )

    return value === 'friends' ? navItemFriends : navItem;
}

export default NavItem