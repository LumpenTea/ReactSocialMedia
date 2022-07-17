import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage, addPost }) => {
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPosts postsData={profilePage.postsData} style={styles} addPost={addPost} />
        </div>
    );
}

export default Profile;