import socketCallFn from "./socketCallFn";

const socketMsgFn = function(io,state, setState) {
    const socketio = io('wss://clean-chat.kumas.dev');
    socketio.on('conn', () => {
        socketCallFn(socketio.id);
        socketio.on('message', data => {
            setState([...state, data]);
        });
    }); 
}

export default socketMsgFn