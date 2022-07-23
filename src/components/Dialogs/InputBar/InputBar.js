import React from 'react'
import { addMessageActionCreator, messageInputChangeActionCreator } from '../../../redux/dialogsReducer';
import styles from './InputBar.module.css'

const InputBar = ({ value, dispatch }) => {

    const newMessage = () => {
        dispatch(addMessageActionCreator());
    }

    const inputChange = (event) => {
        dispatch(messageInputChangeActionCreator(event.target.value));
    }

    return (
        <div className={styles.send}>
            <input onChange={inputChange}  
                className={styles.send_input}
                value={value} />
            <button onClick={newMessage} className='btn btn-success'>Send</button>
        </div>
    )
}

export default InputBar