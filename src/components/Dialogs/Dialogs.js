import React from 'react';
import Dialog from './Dialog';
import styles from './Dialogs.module.css';
import Message from './Message';

const Dialogs = () => {

  const dialogsData = [
    { user: 'Dymich', id: 1 },
    { user: 'Aleksey', id: 2 },
    { user: 'Valentina', id: 3 },
    { user: 'Georg', id: 4 },
    { user: 'Viktor', id: 5 },
    { user: 'Sveta', id: 6 },
  ];

  const messagesData = [
    { message: 'Hi', likeCount: 10 },
    { message: 'How are you', likeCount: 5 },
    { message: 'Oh yeah!', likeCount: 10 },
  ]

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