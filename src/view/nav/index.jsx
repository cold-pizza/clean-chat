import { Route } from 'react-router-dom';
import React from 'react';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';

function Nav() {
  const navSite = useSelector(state => state.basicReducer.navSite);
  const dispatch = useDispatch();

    return <div className="nav">
      {
        navSite.map(({ site, title, id })=>{
          return (<>
          <Route path={site}>
            <section key={id}>
              <div>{title}</div>
                <div>
                  <i onClick={()=>{
                    dispatch({ type: "SWITCH_SETTING" });
                  }} className="fas fa-cog"></i>
              </div>
            </section>
          </Route>
          </>)
        })
      }
    </div>
  }

export default Nav;