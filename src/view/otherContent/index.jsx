import { useSelector } from 'react-redux';
import './style.scss';

const OtherContent = function(props) {
    const basicImg = useSelector(state => state.basicImg);
    return <div>
             <div className="you">
                <img src={basicImg} alt={basicImg} />
                        <div className="meta-info">
                            <div className="info">
                                <p>{props.chatingRoom[props.id].chatUsers[0].name}</p>
                                <span className="comments">{props.list.content ? props.list.content : props.list.message}</span>
                            </div>
                        </div>
                </div>
    </div>
}

export default OtherContent;