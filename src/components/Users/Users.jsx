import React from "react";
import style from "./users.module.css";
import usersPhoto from '../../asseds/imeges/user-avatar-png-7-original.png'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({totalUserCount, pageSize, currentPage, onPageChanged, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} totalUserCount={totalUserCount}
                   pageSize={pageSize} onPageChanged={onPageChanged}/>

        {
            props.users.map(u => <User key={u.id}
                                       user={u}
                                       follow={props.follow}
                                       unFollow={props.unFollow}
                                       followingInProgress={props.followingInProgress}/>)}
    </div>
}

export default Users;