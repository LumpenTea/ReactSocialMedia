import Post from './Post/Post';
import React from 'react'
import styles from './MyPosts.module.css'

const MyPosts = ({ postsData, addPost }) => {

    let posts = postsData.map(value => <Post message={value.message} likesCount={value.likesCount} />);
    
    let newPost = React.createRef();

    return (
        <div>
            <div className={styles.item}>
                <textarea ref={newPost}></textarea>
                <div>
                    <button onClick={() => addPost()} className='btn btn-success'>Add Post</button>
                </div>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;