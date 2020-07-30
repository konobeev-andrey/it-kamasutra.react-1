import React from "react";
import s from "./NavBarFriend.module.css"
import {NavLink} from "react-router-dom";

const NavBarFriend = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.f.id}>
            <div className={s.avatar}><img src={props.f.avatar}/></div>
            <p>{props.f.name}</p>
        </NavLink>
    )
}
export default NavBarFriend;