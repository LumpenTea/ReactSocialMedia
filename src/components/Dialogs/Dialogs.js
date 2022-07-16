import React from 'react';
import Dialog from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = ({dialogPage}) => {

  let dialogs = dialogPage.dialogsData.map(value => <Dialog user={value.user} id={value.id} />);
  let messages = dialogPage.messagesData.map(value => <Message message={value.message} likeCount={value.likeCount} />);

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