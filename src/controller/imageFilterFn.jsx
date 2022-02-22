const imageFilterFn = function(arr, basicImg) {
  arr.map(list => list.imagePath[0] !== '/' ? list.imagePath = basicImg : list);
  return arr;
}

  export default imageFilterFn