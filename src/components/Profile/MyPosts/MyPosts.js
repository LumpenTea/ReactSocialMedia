import Post from './Post/Post';
import React from 'react'
import styles from './MyPosts.module.css'
import { addPostActionCreator, textChangeActionCreator } from '../../../redux/profileReducer';

const MyPosts = ({ postsData, postTextValue, dispatch }) => {
    
    let posts = postsData.map(value => <Post message={value.message} key={value.message} likesCount={value.likesCount} />);

    const textAreaChange = (event) => {
        dispatch(textChangeActionCreator(event.target.value));
    }

    return (
        <div>
            <div className={styles.item}>
                <textarea value={postTextValue} placeholder='Write post...' onChange={textAreaChange} />
                <div className={styles.item_button}>
                    <button onClick={() => dispatch(addPostActionCreator())}>Add Post</button>
                </div>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;