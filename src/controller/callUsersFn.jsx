import axios from 'axios';
const callUsersFn = function(users) {
    axios.get(`/api/friends`)
              .then(res => {
                console.log("친구가 " + res.data.message);
                console.log(res.data.result);
                localStorage.setItem('user', JSON.stringify(res.data.result));
                users.user = res.data.result;
                return users;
              })
              .catch(err => {
                console.log('친구 에러');
                console.log(err);
              });
}

export default callUsersFn