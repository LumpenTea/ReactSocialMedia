import React from 'react'
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.profileInfo}>
                <div className={styles.header}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTjJx_4H2ivXJG-16dQ4r5txjA-uTQWg_rA&usqp=CAU0' alt='profile-photo'></img>
                    <h2>John Smith</h2>
                </div>
            </div>
            <div className={styles.item}>
            </div>
        </div>
    )
}

export default ProfileInfo