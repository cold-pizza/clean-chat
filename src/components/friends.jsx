import '../styles/friends.scss';

function Friends() {
    return <div className="friends">
        <header>
            <h1>친구</h1>
            <div></div>
        </header>
        <section className="my-profile">
            <img src="/images/happy.jpg" alt="#" />
            <p>재홍</p>
        </section>
        <div>
            <p>친구 4</p>
        </div>
        <ul className="friends-list">
            <li>
            <img src="/images/happy.jpg" alt="#" />
            <p>재홍</p>
            </li>
            <li>
            <img src="/images/happy.jpg" alt="#" />
            <p>재홍</p>
            </li>
            <li>
            <img src="/images/happy.jpg" alt="#" />
            <p>재홍</p>
            </li>
        </ul>
    </div>
}

export default Friends;