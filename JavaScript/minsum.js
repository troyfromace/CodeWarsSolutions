function sumTwoSmallestNumbers(numbers) {  
var minone=numbers[0]; //var to find smallest number
var minonepos=0; //var to keep track of the position of the smallest number
var mintwo; //var to fund second smallest number
var sum; //var for sum

  for(var i=0; i<numbers.length; i++) { //for loop to get the smallest number and its pos
  if(minone>=numbers[i])
  {
    minone=numbers[i];
    minonepos=i;
    }
  }
  
  var mintwopos=minonepos+1; //we need to intialize mintwo to a number in our data that's not the smallest
  if(mintwopos>=numbers.length)
    mintwopos=0;   //we might go out of the array so that recorrects
  mintwo=numbers[mintwopos]; //intialize second smallest number
  
  for(var i=0; i<minonepos; i++) { //checks the array at numbers below the min
  if(mintwo>numbers[i])
    mintwo=numbers[i];
  } 
  
   for(var i=numbers.length-1; i>minonepos; i--) { //checks the array at numbers above the min
  if(mintwo>numbers[i])
    mintwo=numbers[i];
  } 
  
  sum=minone+mintwo; //adds the two together then returns it
  return sum;
};