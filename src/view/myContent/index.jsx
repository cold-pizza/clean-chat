import './style.scss';

const MyContent = function(props) {
    return <div>
                <div className="me">
                <div>
                    <p className="comment">{props.list.content}</p>
                    {/* <p className="time"></p> */}
                </div>
                </div>
    </div> 
}

export default MyContent;