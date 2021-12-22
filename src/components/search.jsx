import '../styles/search.scss';

function Search() {
    return <div className="search">
        <section className="search-form">
        <input type="text" placeholder="검색" />
        <i className="fas fa-times cancel-btn"></i>
        </section>
        <ul>
            <li>
                <img src="/images/happy.jpg" alt="#" />
                <p>강현수</p>
            </li>
        </ul>
    </div>
}

export default Search;