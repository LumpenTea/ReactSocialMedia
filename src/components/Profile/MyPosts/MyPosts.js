import Post from './Post/Post';

const MyPosts = ({postsData}) => {
    
    let posts = postsData.map(value => <Post message={value.message} likesCount={value.likesCount} />);

    return (
        <div>
            {posts}
        </div>
    );
}

export default MyPosts;