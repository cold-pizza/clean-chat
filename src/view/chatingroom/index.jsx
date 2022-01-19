
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import './style.scss';

function ChatingRoom(props) {
    const { id } = useParams();

    const [chatComments, setChatComments] = useState([{ ment: ''}]);

    const [talk, setTalk] = useState({ ment: '' });
    const { ment } = talk;

    const chatingOnChange = function(e) {
        setTalk({...talk, [e.target.name]: e.target.value})
    }

    const onCreateChat = function() {
        const item = {ment};
        setChatComments([...chatComments, item]);
        setTalk({ ment: '' });
    }
    const onKeyDownCreateChat = function() {
        const enter = 13;
        if (window.event.keyCode === enter) {
            const item = {ment};
            setChatComments([...chatComments, item]);
            setTalk({ ment: '' });
        }
    }

    return <div className="chating-room">
        <nav>
        <i onClick={()=>{
            props.history.goBack();
        }} className="fas fa-chevron-left"></i>
        <p className="name">{props.chatingRoom[id].name}</p>
        <div></div>
        </nav>
        <section className="chating-form">
            <div className="you">
                <img src={props.basicImg} alt={props.basicImg} />
                <div className="meta-info">
                    <div className="info">
                        <p>{props.chatingRoom[id].name}</p>
                        <span className="comments">안녕하세요~</span>
                    </div>
                </div>
                    <p className="times"></p>
            </div>
            {
                chatComments.map(({ ment })=>{
                       return <div className="me">
                           {
                               ment !== '' ? 
                               <div>
                               <p className="comment">{ment}</p>
                               <p className="time"></p>
                               </div>
                                : null
                            }
                        </div>
                    
                })
            }
            
        </section>
        <div className="chating-input">
        <input onChange={chatingOnChange} onKeyDown={onKeyDownCreateChat} value={ment} name="ment" id="chating" type="text" />
        <button><i onClick={()=>{
            onCreateChat();
        }} className="fas fa-arrow-up"></i></button>
        </div>
    </div>
}

export default ChatingRoom;