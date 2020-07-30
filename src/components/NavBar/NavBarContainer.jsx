import React from 'react';
import NavBar from "./NavBar";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        friends: state.navBarPage.friends
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);