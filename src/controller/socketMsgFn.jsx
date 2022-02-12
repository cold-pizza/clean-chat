import socketCallFn from "./socketCallFn";

const socketMsgFn = function(io, dispatch, setMessage) {
    const socketio = io('wss://clean-chat.kumas.dev');
    socketio.on('conn', () => {
        socketCallFn(socketio.id);
        socketio.on('message', data => {
            dispatch({ type: "SEND_MESSAGE", payload: { data: data } });
            setMessage(data.message);
        });
    }); 
} 

export default socketMsgFn