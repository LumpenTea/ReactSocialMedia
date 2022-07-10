import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb' alt='beachBackGround'></img>
            </div>
            <div className={styles.item}>
                ava + description
            </div>
            <div className={styles.item}>
                My posts
            </div>
            <div className={styles.item}>
                New Post
            </div>
            <div className={styles.item}>
                post 1
            </div>
            <div className={styles.item}>
                post 2
            </div>
        </div>
    );
}

export default Profile;