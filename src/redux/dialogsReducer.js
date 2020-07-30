const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych', avatar: 'https://www-file.huawei.com/-/media/corp/home/image/logo_400x200.png'},
        {id: 2, name: 'Andrey', avatar: 'https://www-file.huawei.com/-/media/corp/home/image/logo_400x200.png'},
        {id: 3, name: 'Sveta', avatar: 'https://www-file.huawei.com/-/media/corp/home/image/logo_400x200.png'},
        {id: 4, name: 'Sasha', avatar: 'https://www-file.huawei.com/-/media/corp/home/image/logo_400x200.png'},
        {id: 5, name: 'Victor', avatar: 'https://www-file.huawei.com/-/media/corp/home/image/logo_400x200.png'},
        {id: 6, name: 'Valera', avatar: 'https://www-file.huawei.com/-/media/corp/home/image/logo_400x200.png'},
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'yo'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, message: action.newMessageText}],
            }
    }
    return state
}

export const sendMessageActionCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer;