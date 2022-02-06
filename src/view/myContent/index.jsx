import './style.scss';

const MyContent = function(props) {
    return <div>
        {
            props.list.map(list => {
                return <div className="me">
                <div>
                    <p className="comment">{list.content}</p>
                    <p className="time"></p>
                </div>
                </div>
        })
    } 
    </div> 
}

export default MyContent;