import getScrollMessage from "./getScrollMessage";

const handleScroll = (scrollRef, id, dispatch, height) => {
    console.log(scrollRef.current.scrollTop);
    if (scrollRef.current.scrollTop === 0) {
        getScrollMessage(id, dispatch);
        const beforeY = height;
        const Y = scrollRef.current.scrollHeight;
        scrollRef.current.scrollTop = Y - beforeY;
    }
};
export default handleScroll;
