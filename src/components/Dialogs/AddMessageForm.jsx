import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validations/validations";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newMessageText'} placeholder={'new message text'}
            validate={[required, maxLength50]}/>
            <button>send</button>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({
    form:'dialogAddMessageForm',
})(AddMessageForm)

export default AddMessageFormRedux;