import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navBarReducer from "./navBarReducer";


const store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you', likesCount: 10},
                {id: 2, message: 'it\'s my first post', likesCount: 20},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
            newMessageText: '',
        },
        navBarPage: {
            friends: [
                {id: 2, name: 'Andrey', avatar: 'https://www-file.huawei.com/-/media/corp/home/image/logo_400x200.png'},
                {id: 3, name: 'Sveta', avatar: 'https://www-file.huawei.com/-/media/corp/home/image/logo_400x200.png'},
                {id: 4, name: 'Sasha', avatar: 'https://www-file.huawei.com/-/media/corp/home/image/logo_400x200.png'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber () {
        console.log('state shanged')
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        navBarReducer(this._state.navBarPage, action);
        this._callSubscriber(this._state);
    }


}

export default store;