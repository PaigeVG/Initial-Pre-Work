// use nested for loops to process or build multi-dimensional arrays

function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    var subArr = arr[i];
    for(var j = 0; j < subArr.length; j++) {
      product *= subArr[j];
    }
  }
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
