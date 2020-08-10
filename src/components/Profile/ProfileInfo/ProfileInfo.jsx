import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import usersPhoto from '../../../asseds/imeges/user-avatar-png-7-original.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
         props.saveProfile(formData).then(
             () => {setEditMode(false)}
         )

    }
    const goToEditMode = () => setEditMode(true)
    return (
        <div>
            {/*<div className={s.topImg}>*/}
            {/*    <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"/>*/}
            {/*</div>*/}
            <div className={s.discriptionBlock}>
                <img src={props.profile.photos.large || usersPhoto} className={s.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                {editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={goToEditMode}/>}
            </div>
        </div>
    )
}
const ProfileData = ({profile, isOwner, goToEditMode}) => {

    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div><b>about me:</b> {profile.aboutMe}</div>
        <div><b>full name:</b> {profile.fullName}</div>
        <div><b>looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}</div>
        {profile.lookingForAJob &&
        <div><b>My professional skills: </b>{profile.lookingForAJobDescription}</div>}
        <div>
            <b>Contact</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}: </b>{contactValue}</div>
}
export default ProfileInfo;