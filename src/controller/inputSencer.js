const inputSencer = function (nickName, inputSwitch, setInputSwitch) {
    if (nickName?.name === "" && inputSwitch) {
        setInputSwitch(!inputSwitch);
    } else if (nickName?.name.length > 0 && !inputSwitch) {
        setInputSwitch(!inputSwitch);
    }
};

export default inputSencer;
