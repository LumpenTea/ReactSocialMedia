const ADD_POST = 'ADD-POST';
const TEXT_CHANGE = 'TEXT-CHANGE';

export const addPostActionCreator = () => ({ type: ADD_POST });
export const textChangeActionCreator = text => ({ type: TEXT_CHANGE, text: text });

const profileReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-POST':
            state.postsData.push({
                message: state.postTextValue,
                likesCount: 0
            });
            state.postTextValue = '';
            return state;
        case 'TEXT-CHANGE':
            state.postTextValue = action.text;
            return state;
        default:
            return state;
    }
}

export default profileReducer;