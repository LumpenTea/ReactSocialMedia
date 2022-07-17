import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './DialogItem.module.css';

const Dialog = ({ user, id, avatar }) => {
    return (
        <div className='my-auto'>
            <img src={avatar} className={styles.dialogs_avatar}></img>
            <NavLink className={navItem => navItem.isActive ?  styles.users_active : styles.users_item} to={'/messages/' + id}>{user}</NavLink>
        </div>
    )
}

export default Dialog