import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage, dispatch }) => {
    
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPosts postsData={profilePage.postsData} postTextValue={profilePage.postTextValue} dispatch={dispatch} />
        </div>
    );
}

export default Profile;