import styles from './Post.module.css';

const Post = () => {
    return (
        <div className={styles.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTjJx_4H2ivXJG-16dQ4r5txjA-uTQWg_rA&usqp=CAU0' alt='avatar'></img>
            Post 1
            <div className={styles.item_element1}>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;