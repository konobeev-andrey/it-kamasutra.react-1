import React from "react";
import {sendMessageActionCreator} from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return{
        dialogsData: state.dialogsPage.dialogsData,
        messagesData:state.dialogsPage.messagesData,
        newMessageText:state.dialogsPage.newMessageText,
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        newMessage: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText));
        },
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)