import { setSearch } from '../model/search';

  const searchOnChange = function(e) {
    setSearch(e.target.value);
  }

export default searchOnChange