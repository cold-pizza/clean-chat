import '../styles/chat.scss';

function Chat(props) {
    return <div className="chat">
        <li onClick={()=>{
            props.history.push('./chatingroom/:id')
        }}>
            <div className="meta-data">
                <img src="/images/happy.jpg" alt="#" />
                <div>
                    <p>재홍</p>
                    <span>hello world</span>
                </div>
            </div>
            <div className="days">어제</div>
        </li>
        <li>
            <div className="meta-data">
                <img src="/images/happy.jpg" alt="#" />
                <div>
                    <p>재홍</p>
                    <span>hello world</span>
                </div>
            </div>
            <div className="days">어제</div>
        </li>
        <li>
            <div className="meta-data">
                <img src="/images/happy.jpg" alt="#" />
                <div>
                    <p>재홍</p>
                    <span>hello world</span>
                </div>
            </div>
            <div className="days">어제</div>
        </li>
        <li>
            <div className="meta-data">
                <img src="/images/happy.jpg" alt="#" />
                <div>
                    <p>재홍</p>
                    <span>hello world</span>
                </div>
            </div>
            <div className="days">어제</div>
        </li>
    </div>
}

export default Chat;