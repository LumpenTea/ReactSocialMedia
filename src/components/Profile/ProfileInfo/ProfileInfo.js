import React from 'react'
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.backgroundImg}></div>
            <div className={styles.item}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo