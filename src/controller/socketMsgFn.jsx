import socketCallFn from "./socketCallFn";

const socketMsgFn = function (io, dispatch) {
    const socketio = io("wss://clean-chat.kumas.dev");
    socketio.on("conn", () => {
        socketCallFn(socketio.id);
        socketio.on("message", (data) => {
            dispatch({ type: "SEND_MESSAGE", payload: { data: data } });
            dispatch({ type: "ALARM_MESSAGE", payload: data });
        });
    });
};

export default socketMsgFn;
