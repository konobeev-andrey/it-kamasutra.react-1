import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";

let DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
let ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBarContainer/>
                <div className='app-wrapper-content'>
                    <React.Suspense  fallback={<div><Preloader /></div>}>
                        <Route path="/dialogs">
                            <DialogsContainer/>
                        </Route>
                        <Route path="/profile/:userId?">
                            <ProfileContainer/>
                        </Route>
                        <Route path="/users">
                            <UsersContainer/>
                        </Route>
                        <Route path="/news">
                            <News/>
                        </Route>
                        <Route path="/music">
                            <Music/>
                        </Route>
                        <Route path="/settings">
                            <Settings/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                    </React.Suspense>
                </div>
            </div>

        );
    }
}

let mstp = (state) => ({
    initialized: state.app.initialized,
})

const AppContainer = compose(
    withRouter,
    connect(mstp, {initializeApp}))(App);

const SamuraiJSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default SamuraiJSApp;