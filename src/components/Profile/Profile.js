import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({postsData}) => {
    
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPosts postsData={postsData} />
        </div>
    );
}

export default Profile;