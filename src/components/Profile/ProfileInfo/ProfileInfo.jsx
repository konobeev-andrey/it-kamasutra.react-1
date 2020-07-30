import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            {/*<div className={s.topImg}>*/}
            {/*    <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"/>*/}
            {/*</div>*/}
            <div className={s.discriptionBlock}>
                 <img src={props.profile.photos.large}/>
                 <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                <div>about me: {props.profile.aboutMe}</div>
                <div>full name: {props.profile.fullName}</div>
                <div>looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
                <div>looking for a job description: {props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
 }
export default ProfileInfo;