import Post from './Post/Post';
import React from 'react'
import styles from './MyPosts.module.css'

const MyPosts = ({ postsData, addPost, postTextValue, textChange }) => {

    let posts = postsData.map(value => <Post message={value.message} key={value.message} likesCount={value.likesCount} />);

    let newPost = React.createRef();

    const textAreaChange = () => {
        textChange(newPost.current.value);
    }

    return (
        <div>
            <div className={styles.item}>
                <textarea ref={newPost} value={postTextValue} placeholder='Write post...' onChange={() => textAreaChange()} />
                <div className={styles.item_button}>
                    <button onClick={() => addPost()}>Add Post</button>
                </div>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;