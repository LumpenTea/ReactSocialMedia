import React from 'react'
import styles from './FriendsOnline.module.css'

const FriendsOnline = ({ friendsOnline }) => {
    return (
        <div>
            {friendsOnline.map(value => <img src={value} className={styles.friendOnline}></img>)}
        </div>
    )
}

export default FriendsOnline