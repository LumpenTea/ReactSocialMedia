import React from 'react'
import styles from './Message.module.css';

const Message = ({message, user_id}) => {
  
  let messageStyle = user_id % 2 === 0 ? styles.message_left : styles.message_right;
  
  return (
    <div className={`${messageStyle} ${styles.message}`}>{message}</div>
  )
}

export default Message