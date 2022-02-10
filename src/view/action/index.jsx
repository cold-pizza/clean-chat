
import { useSelector } from 'react-redux';
import './style.scss';

function Action(props) {
  const chatBubble = useSelector(state => state.switchReducer.chatBubble);
  const site = useSelector(state => state.stateReducer.site);
  
    return <div className="action">
      {
        site.map(({ site, logo, id })=>{
          return (
            <i key={id} onClick={()=>{
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