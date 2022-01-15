import { Route } from 'react-router-dom';
import './style.scss';

function Nav(props) {

    const navSite = [{
      id: 0,
      site: '/friends',
      title: '친구'
    },{
      id: 1,
      site: '/chat',
      title: '채팅'
    }, {
      id: 2,
      site: '/searchemail',
      title: '친구검색'
    }, {
      id: 3,
      site: '/search',
      title: '친구찾기'
    }, {
      id: 4,
      site: '/friendsremove',
      title: '친구관리'
    }];

    return <div className="nav">
      {
        navSite.map(({ site, title, id })=>{
          return (<>
          <Route path={site}>
          <div>{title}</div>
          <div>
            <i onClick={()=>{
              props.setSettingModalSwitch(!props.settingModalSwitch)
            }} className="fas fa-cog"></i>
            </div>
          </Route>
          </>)
        })
      }
    </div>
  }

export default Nav;