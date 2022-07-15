import Post from './Post/Post';

const MyPosts = ({ postsData, style }) => {

    let posts = postsData.map(value => <Post message={value.message} likesCount={value.likesCount} />);

    return (
        <div>
            <div className={style.item}>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;