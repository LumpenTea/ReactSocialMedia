import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <Post message='Hi, how are you?' likes='15' />
            <Post message='It is my first post' likes='20'/>
        </div>
    );
}

export default MyPosts;