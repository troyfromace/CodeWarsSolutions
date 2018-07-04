function accum(s) {
var currentLetterCode=0; //used to check if the letter is a capital or lower
var currentLetter=' '; //dummy variable to hold which letter is at each spot
var answer; //builds the answer as we go through the function
	for(var i=0; i<s.length; i++) ///for loop for the length of the string s
  {
  currentLetterCode=s.charCodeAt(i); //Gets the letter and it's unicode 
  currentLetter=s.charAt(i);
  if(currentLetterCode<93) { //if it's a capital it will store the letter and then make it lower case
   
      answer=answer+currentLetter;

      
    currentLetter=currentLetter.toLowerCase();
    }
  else { ///stores the answer as an upper case latter
    
  
    answer=answer+currentLetter.toUpperCase();
  
    }
    
    for(var j=0; j<i; j++) //puts in those extra lower case letters
      answer=answer+currentLetter;
      
    answer=answer+"-"; //puts in the dashes
   
  }
  
  answer=answer.slice(9,answer.length-1);
  return answer;
}