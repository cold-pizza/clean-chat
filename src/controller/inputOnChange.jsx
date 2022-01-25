
const inputOnChange = function(e, searchInput, setSearchInput) {
    const { name, value } = e.target;
    setSearchInput({ ...searchInput, [name]: value });
};

export default inputOnChange