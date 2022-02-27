import React, { useState } from "react";
import { Route } from "react-router-dom";
import ChatingRoom from "../chatingroom";
import chatRoomRemoveFn from "../../controller/chatRoomRemoveFn";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";

function Chat(props) {
    const dispatch = useDispatch();
    const SWITCH_CHAT_REMOVE = "SWITCH_CHAT_REMOVE";
    const chatRemoveSwitch = useSelector(
        (state) => state.switchReducer.chatRemoveSwitch
    );
    const basicImg = useSelector((state) => state.basicReducer.basicImg);
    const chatingRoom = useSelector((state) => state.stateReducer.chatingRoom);
    const [removeNum, setRemoveNum] = useState(null);
    return (
        <div className="chat">
            {chatingRoom ? (
                chatingRoom.map(({ chatUsers, ChatContent, id }, i) => {
                    return (
                        <li key={id}>
                            <div
                                onClick={() => {
                                    props.history.push(
                                        `/chat/chatingroom/${id}`
                                    );
                                    dispatch({
                                        type: "GET_MESSAGE",
                                        payload: id,
                                    });
                                }}
                                className="meta-data"
                            >
                                <img src={basicImg} alt={basicImg} />
                                <section>
                                    <div className="data">
                                        <span className="name">
                                            {chatUsers[0].name}
                                        </span>
                                        {/* <div className="red-dot">1</div> */}
                                    </div>
                                    <p className="content">
                                        {ChatContent?.content ?? "null"}
                                    </p>
                                </section>
                            </div>
                            <i
                                onClick={() => {
                                    dispatch({ type: SWITCH_CHAT_REMOVE });
                                    setRemoveNum(i);
                                }}
                                className="fas fa-minus minus"
                            ></i>
                        </li>
                    );
                })
            ) : (
                <p className="no-chat-modal">채팅방이 없습니다.</p>
            )}
            {chatRemoveSwitch ? (
                <div className="chat-remove-modal">
                    <p className="chat-title">
                        {chatingRoom[removeNum].chatUsers[0].name}
                    </p>
                    <p>방을 나가시겠습니까?</p>
                    <div className="btns">
                        <button
                            onClick={() => {
                                // dispatch({ type: "REMOVE_CHATINGROOM", payload: {id: chatingRoom[removeNum].id} })
                                chatRoomRemoveFn(
                                    chatingRoom[removeNum].id,
                                    dispatch
                                );
                                dispatch({ type: SWITCH_CHAT_REMOVE });
                            }}
                        >
                            Yes
                        </button>
                        <button
                            onClick={() => {
                                dispatch({ type: SWITCH_CHAT_REMOVE });
                            }}
                        >
                            No
                        </button>
                    </div>
                </div>
            ) : null}
            <Route
                path="/chat/chatingroom/:id"
                render={() => <ChatingRoom history={props.history} />}
            />
        </div>
    );
}

export default Chat;
