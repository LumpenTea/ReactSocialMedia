import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const Dialog = ({ user, id }) => {
    return (
        <div>
            <NavLink className={navItem => navItem.isActive ?  styles.users_active : styles.users_item} to={'/dialogs/' + id}>{user}</NavLink>
        </div>
    )
}

export default Dialog