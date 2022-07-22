import styles from './Post.module.css';

const Post = props => {
    return (
        <div className={styles.item}>
            <div className={styles.postHead}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTjJx_4H2ivXJG-16dQ4r5txjA-uTQWg_rA&usqp=CAU0' alt='avatar'></img>
                <p className={styles.name}>John Smith</p>
            </div>
            <div className={styles.message}>
                <p className={styles.message_text}>{props.message}</p>
            </div>
        </div>
    );
}

export default Post;