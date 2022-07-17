import React from 'react';
import Dialog from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = ({messagesPage}) => {

  let dialogs = messagesPage.dialogsData.map(value => <Dialog user={value.user} id={value.id} avatar={value.avatar} />);
  let messages = messagesPage.messagesData.map((value, index) => <Message message={value.message} likeCount={value.likeCount} user_id={index} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_users}>
        {dialogs}
      </div>
      <div className={`${styles.dialogs_messages} mt-auto`}>
        {messages}
      </div>
    </div>
  )
}

export default Dialogs;