import '../styles/friends.scss';

function Friends(props) {
    return <div className="friends">
        <section onClick={()=>{
            props.history.push('/myprofile');
        }} className="my-profile">
            <img src="/images/happy.jpg" alt="#" />
            <p>재홍</p>
        </section>
        <div className="friends-number">
            <p>친구 4</p>
        </div>
        <ul className="friends-list">
        {
            props.user.map(({ id, name })=>{
                return (
                <li key={id}>
                    <img src="/images/happy.jpg" alt="#" />
                    <p>{name}</p>
                </li>
                )
            })
        }
        </ul>
        
    </div>
}

export default Friends;