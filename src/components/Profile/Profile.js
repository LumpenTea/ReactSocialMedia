import MyPosts from './MyPosts/MyPosts';
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
            <MyPosts />
        </div>
    );
}

export default Profile;