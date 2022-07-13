import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
        <div className={styles.dialogs_users}>
            <div>Dimych</div>
            <div className={styles.users_active}>Aleksey</div>
            <div>Valentina</div>
            <div>Georg</div>
            <div>Viktor</div>
        </div>
        <div className={styles.dialogs_messages}>
            <div>Hi</div>
            <div>How are you?</div>
            <div>Oh yeah!</div>
        </div>
    </div>
  )
}

export default Dialogs;