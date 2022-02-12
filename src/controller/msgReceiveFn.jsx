import socketCallFn from "./socketCallFn";

const msgReceiveFn = function(io, dispatch) {
    const socketio = io('wss://clean-chat.kumas.dev');
    socketio.on('conn', () => {
        socketCallFn(socketio.id);
        socketio.on('message', data => {
            // console.log(data);
            dispatch({type: "ALARM_MESSAGE", payload: { data: data }});
        });
    }); 
}

export default msgReceiveFn