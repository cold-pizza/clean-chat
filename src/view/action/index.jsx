
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';

function Action(props) {
  const dispatch = useDispatch();
  const chatBubble = useSelector(state => state.switchReducer.chatBubble);
  const site = useSelector(state => state.basicReducer.site);
  
    return <div className="action">
      {
        site.map(({ site, logo, id })=>{
          return (
            <i key={id} onClick={()=>{
              if (site === '/search') {
                dispatch({ type: "SET_USERS", payload: JSON.parse(localStorage.getItem("users")) });
              }

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