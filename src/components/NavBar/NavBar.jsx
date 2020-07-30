import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import NavBarFriend from "./NavBarFriend/NavBarFriend";

const NavBar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/settings">Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/users">Find Users</NavLink>
            </div>
            <div className={s.friends__wrapper}>
                Friends
                    <div className={s.friends}>
                        {props.friends.map((f) => <NavBarFriend key={f.id} f={f}/>)}
                    </div>
            </div>
        </nav>)
}

export default NavBar;