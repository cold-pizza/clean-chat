import axios from 'axios';

    const onKeyDownCreateChat = function(id) {
        const enter = 13;
        if (window.event.keyCode === enter) {
            axios.post(`https://clean-chat.kumas.dev/api/chats/${id}/messages`)
        .then(res => {
            console.log(res.data.message);
            console.log(res);
        })
        .catch(err => {
            console.log(err);
            console.log('메세지 전송 에러');
        })

            // const item = {ment};
            // setChatComments([...chatComments, item]);
            // setTalk({ ment: '' });
        }
    };

    export default onKeyDownCreateChat