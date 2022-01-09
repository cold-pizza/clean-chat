import '../styles/chat.scss';

function Chat(props) {
    console.log(props.chatingRoom)
    return <div className="chat">
        {
            props.chatingRoom.map(({ id, name, img, comments, days })=>{
                return <li onClick={()=>{
            props.history.push(`/chatingroom/${id}`);
        }}>
            <div className="meta-data">
                <img src={img} alt={img} />
                <div>
                    <p>{name}</p>
                    <span>{comments}</span>
                </div>
            </div>
            <div className="days">{days}</div>
        </li>
            })
        }
        {
            props.chatingRoom.length === 0 ? 
            <p className="no-chat-modal">채팅방이 없습니다.</p> : null
        }
    </div>
}


export default Chat;