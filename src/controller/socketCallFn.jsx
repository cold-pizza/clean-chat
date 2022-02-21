import axios from 'axios';

const socketCallFn = function(id) {
    const body = {
        socketId: id
    }
    axios.post('/api/users/socket', body)
    .then(res => {
        console.log("socket이 "+res.data.message);
        console.log(res.data);
    })
    .catch(err => {
        console.log("socket에러\n" + err);
    });
}

export default socketCallFn