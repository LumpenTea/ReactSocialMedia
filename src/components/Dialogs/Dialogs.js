import React from 'react';
import Dialog from './Dialog';
import styles from './Dialogs.module.css';
import Message from './Message';

const Dialogs = () => {
  return (
      <div className={styles.dialogs}>
        <div className={styles.dialogs_users}>
            <Dialog user='Dimych' id='1' />
            <Dialog user='Aleksey' id='3' />
            <Dialog user='Valentina' id='4' />
            <Dialog user='Georg' id='5' />
            <Dialog user='Viktor' id='6' />
        </div>
        <div className={styles.dialogs_messages}>
          <Message message='Hi' />
          <Message message='How are you?' />
          <Message message='Oh yeah!' />
        </div>
      </div>
  )
}

export default Dialogs;