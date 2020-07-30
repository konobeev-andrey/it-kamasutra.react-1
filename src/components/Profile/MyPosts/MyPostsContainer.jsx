import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return{
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onAddPost: (textPost) => {
            dispatch(addPostActionCreator(textPost));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyPosts);