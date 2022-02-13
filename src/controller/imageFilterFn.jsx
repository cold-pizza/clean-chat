
const imageFilterFn = function(arr, basicImg) {
    let array = [...arr];
    for (let i = 0; i < array.length; i++) {
      if (array[i].imagePath.length < 7) {
        array[i].imagePath = basicImg;
      }
    }
    return array;
  }

  export default imageFilterFn