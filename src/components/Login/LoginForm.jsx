import {Field, reduxForm} from "redux-form";
import React from "react";
import {required} from "../../utils/validations/validations";
import {Input} from "../common/FormsControls/FormsControls";
import style from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder={'email'}
                validate={required}/>
            </div>
            <div>
                <Field component={Input} name={'password'} type="text" placeholder={'password'} type={'password'}
                       validate={required}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type="checkbox"/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)

export default LoginReduxForm;