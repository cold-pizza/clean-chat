import axios from 'axios';


    const createChatContent = function(id, ment, setTalk, chatComments, setChatComments) {
        const data = {
            message: ment
        }
        axios.post(`${axios.defaults.baseURL}/api/chats/${id}/messages`, data)
        .then(res => {
            console.log(res.data.message);
            console.log(res);
            axios.get(`${axios.defaults.baseURL}/api/chats/${id}/messages`)
            .then(res => {
                console.log(res.data.message);
                console.log(res.data.result);
            })
            .catch(console.log)
        })
        .catch(err => {
            console.log(err);
            console.log('메세지 전송 에러');
        })
        
        setChatComments([...chatComments, ment]);
        setTalk({ ment: '' });
    };

    export default createChatContent