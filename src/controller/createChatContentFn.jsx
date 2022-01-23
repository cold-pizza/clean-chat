import axios from 'axios';


    const createChatContent = function(id, ment) {
        const data = {
            message: ment
        }
        axios.post(`https://clean-chat.kumas.dev/api/chats/${id}/messages`, data)
        .then(res => {
            console.log(res.data.message);
            console.log(res);
            axios.get(`https://clean-chat.kumas.dev/api/chats/${id}/messages`)
            .then(console.log)
            .catch(console.log)
        })
        .catch(err => {
            console.log(err);
            console.log('메세지 전송 에러');
        })

        // const item = {ment};
        // setChatComments([...chatComments, item]);
        // setTalk({ ment: '' });
    };

    export default createChatContent