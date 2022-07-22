import React from 'react'
import styles from './InputBar.module.css'

const InputBar = ({ value, dispatch }) => {

    let message = React.createRef();

    const newMessage = () => {
        dispatch({type: 'ADD-MESSAGE'});
        message.current.value = '';
    }

    const inputChange = () => {
        dispatch({type: 'MESSAGE-CHANGE', text: message.current.value});
    }

    return (
        <div className={styles.send}>
            <input onChange={() => inputChange()} 
                ref={message} 
                className={styles.send_input}
                value={value} />
            <button onClick={newMessage} className='btn btn-success'>Send</button>
        </div>
    )
}

export default InputBar