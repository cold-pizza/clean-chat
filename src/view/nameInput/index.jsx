import "./style.scss";
import { useState } from "react";
import nameChangeFn from "../../controller/nameChangeFn";
import onChange from "../../controller/onChange";
import inputSencer from "../../controller/inputSencer";

import { useDispatch, useSelector } from "react-redux";

function NameInput(props) {
    const dispatch = useDispatch();
    const myAccount = useSelector((state) => state.stateReducer.myAccount);
    const [inputSwitch, setInputSwitch] = useState(false);
    const [nickName, setNickName] = useState(null);

    return (
        <div className="name-input">
            <input
                onChange={(e) => onChange(e, nickName, setNickName)}
                onKeyUp={inputSencer(nickName, inputSwitch, setInputSwitch)}
                name="name"
                type="text"
                placeholder={props.name}
            />
            {inputSwitch ? (
                <i
                    onClick={() => {
                        nameChangeFn(myAccount, nickName, dispatch);
                        dispatch({ type: "SWITCH_MY_EDIT" });
                        dispatch({ type: "SWITCH_NAME_INPUT" });
                        setNickName(null);
                    }}
                    className="fas fa-check"
                ></i>
            ) : null}
        </div>
    );
}

export default NameInput;
