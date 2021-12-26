import '../styles/friendsmodal.scss';

function FriendsModal(props) {
    return <div className="friends-modal">
        <section className="friends-profile">
            <div className="meta-info">
                <img src="../images/1.jpg" alt="#" />
                <p>이름</p>
            </div>
            <div className="btns">
                <button className="chating-btn">채팅</button>
                <button onClick={()=>{
                    props.history.goBack();
                }} className="cancel-btn">뒤로가기</button>
            </div>
        </section>
    </div>
}

export default FriendsModal;