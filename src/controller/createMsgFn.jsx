import axios from 'axios';


    const createMsgFn = function(id, ment, setTalk, otherChat, setOhterChat) {
        const data = {
            message: ment
        }
            axios.post(`${axios.defaults.baseURL}/api/chats/${id}/messages`, data)
            .then(res => {
                console.log(`${res.data.message}\n${res}`);
                axios.get(`${axios.defaults.baseURL}/api/chats/${id}/messages`)
                .then(res => {
                    console.log(`${res.data.message}\n${res.data.result[0].ChatContents[0]}`);
                    setOhterChat([...otherChat, res.data.result[0].ChatContents[0]]);
                    setTalk({ ment: '' });
                })
                .catch(err => {
                    console.log(err);
                    console.log('메시지 조회 에러');
                })
            })
            .catch(err => {
                console.log(err);
                console.log('메시지 전송 에러');
            })
    };

export default createMsgFn