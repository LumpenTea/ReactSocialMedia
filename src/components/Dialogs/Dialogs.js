import React from 'react';
import Dialog from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = ({dialogsData, messagesData}) => {

  let dialogs = dialogsData.map(value => <Dialog user={value.user} id={value.id} />);
  let messages = messagesData.map(value => <Message message={value.message} likeCount={value.likeCount} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_users}>
        {dialogs}
      </div>
      <div className={styles.dialogs_messages}>
        {messages}
      </div>
    </div>
  )
}

export default Dialogs;