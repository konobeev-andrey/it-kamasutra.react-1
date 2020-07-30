import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageFormRedux from "./AddMessageForm";

const Dialogs = (props) => {

    const addNewMessage = (value) =>{
        props.newMessage(value.newMessageText)
    }

    let dialogsElement = props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.messagesData.map(m => <Message key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;