import Post from './Post/Post';
import React from 'react'
import styles from './MyPosts.module.css'

const MyPosts = ({ postsData, postTextValue, dispatch }) => {

    let posts = postsData.map(value => <Post message={value.message} key={value.message} likesCount={value.likesCount} />);

    let newPost = React.createRef();

    const textAreaChange = () => {
        dispatch({type: 'TEXT-CHANGE', text: newPost.current.value})
    }

    return (
        <div>
            <div className={styles.item}>
                <textarea ref={newPost} value={postTextValue} placeholder='Write post...' onChange={() => textAreaChange()} />
                <div className={styles.item_button}>
                    <button onClick={() => dispatch({type: 'ADD-POST'})}>Add Post</button>
                </div>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;