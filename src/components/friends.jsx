import '../styles/friends.scss';

function Friends(props) {
    return <div className="friends">
        <section onClick={()=>{
            props.history.push('/myprofile');
        }} className="my-profile">
            <img src={props.basicImg} alt="#" />
            <p>{props.myAccount !== null ? props.myAccount.name : '로딩중입니다.'}</p>
        </section>
        <div className="friends-number">
            <p>친구 4</p>
        </div>
        <ul className="friends-list">
        {
            props.user.map(({ id, name,img })=>{
                return (
                <li onClick={()=>{
                    props.history.push(`/friends/friendsmodal/${id}`)
                }} key={id}>
                    <img src={img} alt={img} />
                    <p>{name}</p>
                </li>
                )
            })
        }
        </ul>
        
    </div>
}

export default Friends;