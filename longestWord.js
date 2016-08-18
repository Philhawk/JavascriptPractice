function LongestWord(sen) {

  var words = sen.match(/(\w+)/g);
  var longest = '';
  for (var i=0; i < words.length; i+=1) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;

}
