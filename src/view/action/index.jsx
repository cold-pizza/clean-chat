import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./style.scss";

function Action(props) {
    const dispatch = useDispatch();
    const chatBubble = useSelector((state) => state.switchReducer.chatBubble);
    const site = useSelector((state) => state.basicReducer.site);
    const redIconCheck = window.location.href;
    return (
        <div className="action">
            {site.map(({ site, logo, id }) => {
                return (
                    <i
                        style={{
                            color: redIconCheck.includes(site)
                                ? "#2647ff"
                                : "black",
                        }}
                        key={id}
                        onClick={() => {
                            if (site === "/chat") {
                                axios.get(`/api/chats`).then((res) => {
                                    const chatingRoom = res.data.result;
                                    dispatch({
                                        type: "SET_CHATINGROOM",
                                        payload: chatingRoom,
                                    });
                                });
                            }
                            props.history.push(site);
                        }}
                        className={logo}
                    ></i>
                );
            })}
            {chatBubble ? <div className="red-dot">1</div> : null}
        </div>
    );
}

export default Action;
