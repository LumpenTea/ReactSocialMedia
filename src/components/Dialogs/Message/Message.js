import React from 'react'
import styles from './Message.module.css';

const Message = ({ message, user_id }) => {

  let messageStyle = user_id % 2 === 0 ? styles.message_left : styles.message_right;

  return (
    <div className={`${messageStyle} ${styles.message}`}>
      <div className={styles.message_text}>
        {message}
      </div>
    </div>
  )
}

export default Message