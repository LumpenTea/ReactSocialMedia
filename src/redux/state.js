const state = {
    profilePage: {
        postsData: [
            { message: 'Hi, how are you?', likesCount: 15 },
            { message: 'It is my first post', likesCount: 20 },
        ]
    },
    messagesPage: {
        dialogsData: [
            { user: 'Dymich', id: 1 },
            { user: 'Aleksey', id: 2 },
            { user: 'Valentina', id: 3 },
            { user: 'Georg', id: 4 },
            { user: 'Viktor', id: 5 },
            { user: 'Sveta', id: 6 },
          ],
        messagesData: [
            { message: 'Hi', likeCount: 10 },
            { message: 'How are you', likeCount: 5 },
            { message: 'Oh yeah!', likeCount: 10 }
        ]
    }
}

export default state;