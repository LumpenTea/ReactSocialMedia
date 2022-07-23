const ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE_CHANGE = 'MESSAGE-CHANGE';

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const messageInputChangeActionCreator = text => ({type: MESSAGE_CHANGE, text: text});

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            state.messagesData.push({
                message: state.messageValue,
                likesCount: 0
            });
            state.messageValue = '';
            return state;
        case 'MESSAGE-CHANGE':
            state.messageValue = action.text;
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;