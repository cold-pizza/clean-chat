import '../styles/searchemail.scss';

function SearchEmail(props) {
    return <div className="search-email">
        <div className="search-form">
        <input type="text" placeholder="이메일로 검색해주세요!" />
        <i className="fas fa-times cancel-btn" onClick={()=>{
            props.history.goBack();
        }}></i>
        </div>
        <section className="item-list">
            <div className="item">
                <img src="#" alt="#" />
                <p>이름</p>
            </div>
        </section>
    </div>
}

export default SearchEmail;