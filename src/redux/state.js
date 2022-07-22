export let store = {
    _state: {
        sideBar: {
            navItems: ['profile', 'messages', 'news', 'music', 'settings', 'friends'],
            friendsOnline: ['https://media.istockphoto.com/photos/portrait-of-creative-trendy-black-african-male-designer-laughing-picture-id1296158947?k=20&m=1296158947&s=612x612&w=0&h=qh89sBTcLTUuuOZMMUwMrbfnWqERRyZch9R6Z74S9Lc=',
                'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80']
        },
        profilePage: {
            postsData: [
                { message: 'Hi, how are you?', likesCount: 15 },
                { message: 'It is my first post', likesCount: 20 },
            ],
            postTextValue: ''
        },
        messagesPage: {
            dialogsData: [
                { user: 'Dymich', id: 1, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
                { user: 'Aleksey', id: 2, avatar: 'https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000' },
                { user: 'Masha', id: 3, avatar: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000' },
                { user: 'Georg', id: 4, avatar: 'https://www.thoughtco.com/thmb/jIUclL8nYDNm5ikjNTHoAtRnKxg=/735x0/good-looking-man-with-big-beard-56688bcf3df78ce1611f7ba8.jpg' },
                { user: 'Viktor', id: 5, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKgf1btqasr29ElrKVN80RPZxRDi4qTMnwQ&usqp=CAU' },
                { user: 'Sveta', id: 6, avatar: 'https://www.unwomen.org/sites/default/files/Headquarters/Images/Sections/News/Stories/2021/10/Afghanistan_FawziaKoofi_PortraitUNHQ_October2021__UNW6506_1_960x640.jpg' },
            ],
            messagesData: [
                { message: 'Hi', likeCount: 10 },
                { message: 'How are you', likeCount: 5 },
                { message: 'I am great!', likeCount: 10 }
            ],
            messageValue: '',
        }
    },
    getState() {
        return this._state;
    },
    _RenderEntireTree() {
        console.log('Render changed');
    },
    subscribe(observer) {
        this._RenderEntireTree = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                this._state.profilePage.postsData.push({
                    message: this._state.profilePage.postTextValue,
                    likesCount: 0
                });
                this._state.profilePage.postTextValue = '';
                this._RenderEntireTree(this._state);
            case 'TEXT-CHANGE':
                this._state.profilePage.postTextValue = action.text;
                this._RenderEntireTree(this._state);
            case 'ADD-MESSAGE':
                this._state.messagesPage.messagesData.push({
                    message: this._state.messagesPage.messageValue,
                    likesCount: 0
                });
                this._state.messagesPage.messageValue = '';
                this._RenderEntireTree(this._state);
            case 'MESSAGE-CHANGE':
                this._state.messagesPage.messageValue = action.text;
                this._RenderEntireTree(this._state);
        }
    }
}