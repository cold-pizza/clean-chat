
const CREATE_MESSAGE = "CREATE_MESSAGE";


export const createMessage = () => dispatch => {
    dispatch({ type: CREATE_MESSAGE });
}