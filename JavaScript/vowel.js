function getCount(str) {
  var vowelsCount = 0;
  var curentLetterCode;
  for(var i=0; i<str.length; i++) ///for loop for the length of the string str
  {
  currentLetterCode=str.charCodeAt(i); //get the unicode value for the letter
  //if staement that checks for the lowercase vowel unicode
  if(currentLetterCode===97 || currentLetterCode===101 ||currentLetterCode===105 ||currentLetterCode===111 || currentLetterCode===117)
  vowelsCount++;
  
  }
  return vowelsCount;
}