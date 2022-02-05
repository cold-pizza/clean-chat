import axios from 'axios';

    const createMsgFn = function(id, ment, otherChat, setOtherChat, setTalk) {
        const data = {
            message: ment
        }
            axios.post(`${axios.defaults.baseURL}/api/chats/${id}/messages`, data)
            .then(res => {
                console.log(res);
                setOtherChat([...otherChat, res.data.result]);
                setTalk({ ment: '' });
            }) 
            .catch(err => {
                console.log(err);
                console.log('메시지 전송 에러');
            })
    };

export default createMsgFn