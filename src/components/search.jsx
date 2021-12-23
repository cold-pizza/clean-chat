import '../styles/search.scss';

function Search(props) {
    return <div className="search">
        <section className="search-form">
        <input value={props.search} onChange={props.searchOnChange} type="text" placeholder="검색" />
        <i className="fas fa-times cancel-btn"></i>
        </section>
        <ul>
            {
            props.user.filter((user)=>{
                if (props.search === '') {
                    return user;
                } else if (user.name.includes(props.search)) {
                    return user;
                }
            }).map(({ name, img })=>{
                return <li>
                <img src={img} alt={img} />
                <p>{name}</p>
            </li>
            })
            }
        </ul>
    </div>
}

export default Search;