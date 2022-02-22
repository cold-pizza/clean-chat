const imageFilterFn = function(arr, basicImg) {
    let array = [...arr].forEach(list => list.imagePath.length < 5 ? list.imagePath = basicImg : list);
    return array;
}

  export default imageFilterFn