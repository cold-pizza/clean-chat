import { useSelector } from 'react-redux';
import './style.scss';

const OtherContent = function(props) {
    const basicImg = useSelector(state => state.basicImg);
    return <div>
        {
            props.list.map((list) => {
                return <div className="you">
                <img src={basicImg} alt={basicImg} />
                        <div className="meta-info">
                            <div className="info">
                                {/* <p>{props.chatingRoom[props.id].chatUsers[0].name}</p> */}
                                <p>{list.User.name}</p>
                                <span className="comments">{list.content}</span>
                            </div>
                        </div>
                    <p className="times"></p>
                </div>
            })
        }
    </div>
}

export default OtherContent;