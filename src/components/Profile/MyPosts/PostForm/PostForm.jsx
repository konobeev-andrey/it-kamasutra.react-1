import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validations/validations";
import {Textarea} from "../../../common/FormsControls/FormsControls";

let maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'textPost'} component={Textarea} placeholder={'New post '}
                validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>add Post</button>
            </div>
        </form>
    )
}
const PostReduxForm = reduxForm({
    form: 'postForm'
})(PostForm)

export default PostReduxForm;