import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage, addPost, textAreaChange }) => {
    
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPosts postsData={profilePage.postsData} style={styles} addPost={addPost} postTextValue={profilePage.postTextValue} textChange={textAreaChange} />
        </div>
    );
}

export default Profile;