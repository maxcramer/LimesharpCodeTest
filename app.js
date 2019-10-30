function repeat(array) {
  var outputArray = [];
  for (var i = 0; i < 3; i++) {
    outputArray = outputArray.concat(array);
  }
  return outputArray;
}

repeat([1, 2, 3]);
