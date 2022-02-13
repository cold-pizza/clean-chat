
const onChange = function(e, state, setState) {
    setState({ ...state, [e.target.name]: e.target.value });
}

export default onChange