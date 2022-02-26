import { Route } from "react-router-dom";
import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

function Nav(props) {
    const navSite = useSelector((state) => state.basicReducer.navSite);
    return (
        <div className="nav">
            {navSite.map(({ site, title, id }) => {
                return (
                    <>
                        <Route path={site} key={id}>
                            <section key={id}>
                                <div>{title}</div>
                                <div>
                                    {site === "/search" ? (
                                        <i
                                            onClick={() => {
                                                props.history.goBack();
                                            }}
                                            className="fas fa-times"
                                        ></i>
                                    ) : null}
                                </div>
                            </section>
                        </Route>
                    </>
                );
            })}
        </div>
    );
}

export default Nav;
