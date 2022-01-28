
import { useState } from 'react';
import './style.scss';

function Action(props) {
  const [chatBubble, setChatBubble] = useState(false);
    const site = [{
      id: 0,
      site: '/friends',
      logo: 'fas fa-user',
    }, {
      id: 1,
      site: '/chat',
      logo: 'fas fa-comment'
    }, {
      id: 2,
      site: '/search',
      logo: 'fas fa-search'
    }
  ];
    return <div className="action">
      {
        site.map(({ site, logo, dot })=>{
          return (
            <i onClick={()=>{
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