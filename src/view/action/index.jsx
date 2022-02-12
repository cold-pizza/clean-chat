
import { useSelector } from 'react-redux';
import './style.scss';

function Action(props) {
  const chatBubble = useSelector(state => state.switchReducer.chatBubble);
  const site = useSelector(state => state.basicReducer.site);
  // const chatId = useSelector(state => state.stateReducer.message.chatId);
  
    return <div className="action">
      {
        site.map(({ site, logo, id })=>{
          return (
            <i key={id} onClick={()=>{
              if (site === '/search') {
                props.setUser(JSON.parse(localStorage.getItem('user')));
              }
              // if (chatId !== undefined && site === '/chat') {
              //   import("../../controller/msgSearchFn")
              //   .then(({ defalut: msgSearchFn }) => {
              //     msgSearchFn(chatId, );
              //   })
              //   .catch(err => console.log(err));
              // }
        props.history.push(site);
      }} className={logo}>
      </i>
          )
        })
      }
      { chatBubble ? <div className="red-dot">1</div> : null}
      </div>
  }

export default Action;