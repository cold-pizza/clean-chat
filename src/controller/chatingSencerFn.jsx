const chatingSencerFn = function (ment, inputSwitch, setInputSwitch) {
    if (ment.length === 0 && inputSwitch) {
        setInputSwitch(!inputSwitch);
    } else if (ment.length > 0 && !inputSwitch) {
        setInputSwitch(!inputSwitch);
    }
};

export default chatingSencerFn;
