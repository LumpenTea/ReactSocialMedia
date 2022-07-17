import React from 'react'
import styles from './InputBar.module.css'

const InputBar = () => {

    let message = React.createRef();

    let newMessage = () => {
        alert(message.current.value);
    }

    return (
        <div className={styles.send}>
            <input ref={message} className={styles.send_input}></input>
            <button onClick={newMessage} className='btn btn-success'>Send</button>
        </div>
    )
}

export default InputBar