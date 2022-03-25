import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router";
import io from "socket.io-client";
import "./style.scss";
import OtherContent from "../../view/otherContent";
import MyContent from "../../view/myContent";

import msgSearchFn from "../../controller/msgSearchFn";
import socketMsgFn from "../../controller/socketMsgFn";
import chatingSencerFn from "../../controller/chatingSencerFn";
import onChange from "../../controller/onChange";
import chatNameFilterFn from "../../controller/chatNameFilterFn";
// import chatAlarm from "../../controller/chatAlarmFn";
import getScrollMessage from "../../controller/getScrollMessage";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

function ChatingRoom(props) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const chatContents = useSelector(
        (state) => state.stateReducer.chatContents
    );
    const chatingRoom = useSelector((state) => state.stateReducer.chatingRoom);
    const messageData = useSelector((state) => state.stateReducer.message);
    const myAccount = useSelector((state) => state.stateReducer.myAccount);
    const [inputSwitch, setInputSwitch] = useState(false);
    const scrollRef = useRef(null);
    const [talk, setTalk] = useState({ ment: "" });
    const { ment } = talk;
    const [num, setNum] = useState(null);
    const onChangeCallback = useCallback(
        (e) => onChange(e, talk, setTalk),
        [talk]
    );

    console.log(inputSwitch);
    useEffect(() => {
        if (
            scrollRef.current.scrollTop >
            scrollRef.current.scrollHeight - 880
        ) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        } else if (scrollRef.current.scrollTop < 100) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        } else if (!inputSwitch) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
        return;
    }, [chatContents]);

    useEffect(() => {
        socketMsgFn(io, dispatch);
        return;
    }, [dispatch]);

    const handleScroll = () => {
        if (scrollRef.current.scrollTop < 500) {
            if (num !== 0) {
                getScrollMessage(id, dispatch, chatContents, setNum);
                // console.log(num);
                scrollRef.current.scrollTop = 5747;
            } else console.log("더 이상 불러올 수 없습니다.");
        }
    };

    return (
        <div className="chating-room">
            <nav>
                <i
                    onClick={() => {
                        msgSearchFn(id, dispatch);
                        props.history.push("/chat");
                    }}
                    className="fas fa-chevron-left"
                ></i>
                <p className="name">
                    {chatingRoom ? chatNameFilterFn(chatingRoom, id) : "null"}
                </p>
                <div></div>
            </nav>
            <section
                ref={scrollRef}
                onScroll={_.throttle(handleScroll, 500)}
                className="chating-form"
            >
                {chatContents
                    ? chatContents.map((list, i) => {
                          if (list?.User) {
                              if (list.User.id === myAccount.id) {
                                  return <MyContent key={i} list={list} />;
                              } else
                                  return (
                                      <OtherContent
                                          key={i}
                                          list={list}
                                          chatName={chatNameFilterFn(
                                              chatingRoom,
                                              id
                                          )}
                                      />
                                  );
                          } else if (list?.UserId) {
                              return <MyContent key={i} list={list} />;
                          } else {
                              return (
                                  <OtherContent
                                      key={i}
                                      list={list}
                                      chatName={chatNameFilterFn(
                                          chatingRoom,
                                          id
                                      )}
                                  />
                              );
                          }
                      })
                    : console.log("chatContents === null")}
            </section>
            <form className="chating-input">
                <input
                    onChange={(e) => onChangeCallback(e)}
                    onKeyUp={chatingSencerFn(ment, inputSwitch, setInputSwitch)}
                    value={ment}
                    name="ment"
                    id="chating"
                    type="text"
                />
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        if (ment) {
                            dispatch({
                                type: "CREATE_MESSAGE",
                                payload: { id, message: ment, setTalk },
                            });
                        }
                        setInputSwitch(!inputSwitch);
                    }}
                >
                    {inputSwitch ? <i className="fas fa-arrow-up"></i> : null}
                </button>
            </form>
        </div>
    );
}

export default React.memo(ChatingRoom);
