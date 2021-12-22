import '../styles/chatingroom.scss';

function ChatingRoom(props) {
    return <div className="chating-room">
        <nav>
        <i onClick={()=>{
            props.history.goBack();
        }} className="fas fa-chevron-left"></i>
        <p className="name">강현수</p>
        <div></div>
        </nav>
        <section className="chating-form">
            <div className="you">
                <img src="/images/happy.jpg" alt="#" />
                <div className="meta-info">
                    <div className="info">
                        <p>강현수</p>
                        <span className="comments">안녕하세요~</span>
                    </div>
                </div>
                    <p className="times">11:30</p>
            </div>
            <div className="me">
                <p className="comment">네 안녕하세요</p>
                <p className="time">11:33</p>
            </div>
        </section>
    </div>
}

export default ChatingRoom;