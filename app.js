function repeat(array) {
  var outputArray = [];
  for (var i = 0; i < 3; i++) {
    outputArray = outputArray.concat(array);
  }
  return outputArray;
}

repeat([1, 2, 3]);

function reformat(str) {
  var vowels = 'aeiou';
  var strArr = str.toLowerCase().split('');
  var newArr = strArr.filter(function(letter) {
    if(vowels.indexOf(letter) == -1) {
      return letter;
    }
  });

  var string = '';
  newArr.forEach(function(letter) {
    string += letter;
  });
  return string;
}

reformat('liMeSHArp DeveLoper TEST');


// function reformat() {
//   var string = 'liMeSHArp DeveLoper TEST';
//   var lc = string.toLocaleLowerCase();
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   return lc.split('').filter(function(lc) {
//     return vowels.indexOf(lc.toLowerCase() == -1);
//   }).join('');
//
// }
//
// reformat();



// function reformat(text) {
//   var result = '';
//   for(i = 0; i < text.length; i++) {
//
//     var c = text[i]
//
//     if('aeiou'.match(c.toLowerCase()) === null) {
//       result += c;
//     }
//   }
//   console.log(c);
// }
//
// reformat();
