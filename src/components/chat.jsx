import '../styles/chat.scss';

function Chat(props) {
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
    </div>
}

export default Chat;