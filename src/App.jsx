import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// 컴포넌트
import "./App.scss";
import Nav from "./view/nav";
import Login from "./view/login";
import Signup from "./view/signup";
import Chat from "./view/chat";
import Search from "./view/search";
import Setting from "./view/setting";
import MyProfile from "./view/myprofile";
import Friends from "./view/friends";
import Action from "./view/action";
import ChatingAlarm from "./view/chatingAlarm";

import urlLimitFn from "./controller/urlLimitFn";
import checkBaseUrlFn from "./controller/checkBaseUrl";
import chatAlarmSencer from "./controller/chatAlarmSencer";
import chatAlarm from "./controller/chatAlarmFn";
import logoutFn from "./controller/logoutFn";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://clean-chat.kumas.dev";

function App() {
    const history = useHistory();
    const dispatch = useDispatch();
    const alarm = useSelector((state) => state.switchReducer.alarm);
    const myAccount = useSelector((state) => state.stateReducer.myAccount);
    const messageData = useSelector((state) => state.stateReducer.message);
    // window.onbeforeunload = function (e) {
    //     if (localStorage.length > 1) {
    //         history.push("/friends");
    //     }
    //     e.preventDefault();
    // };
    useEffect(() => {
        // logoutFn(history, dispatch);
        myAccount === null ? urlLimitFn(history) : checkBaseUrlFn(history);
        return () => console.log("url확인");
    }, [dispatch, history, myAccount]);
    useEffect(() => {
        chatAlarm(messageData, dispatch);
        return () => clearTimeout(chatAlarm);
    }, [dispatch, messageData]);

    const pathFunction = function () {
        if (localStorage.length > 1) {
            return <Friends history={history} />;
        } else return <Login history={history} />;
    };

    return (
        <div className="App">
            <div className="app-box">
                <Nav history={history} />
                <Route exact path="/" render={() => pathFunction()} />
                <Route
                    path="/signup"
                    render={() => <Signup history={history} />}
                />
                <Route
                    path={["/friends", "/chat", "/search", "/setting/:site"]}
                    render={() => <Action history={history} />}
                />
                <Route
                    path="/friends"
                    render={() => <Friends history={history} />}
                />
                <Route path="/chat" render={() => <Chat history={history} />} />
                <Route
                    path="/search"
                    render={() => <Search history={history} />}
                />
                <Route
                    path="/myprofile"
                    render={() => <MyProfile history={history} />}
                />
                <Route
                    path="/setting"
                    render={() => <Setting history={history} />}
                />
                {alarm ? <ChatingAlarm /> : null}
            </div>
        </div>
    );
}

export default App;
