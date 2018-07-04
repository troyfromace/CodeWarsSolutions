decodeMorse = function(morseCode){
console.log(morseCode);
  var morseArray=morseCode.split(" ");
  var morseAns='';
  console.log(morseArray);
  for(var i=0; i<morseArray.length; i++){
  
if(morseArray[i]==='')
{
var check=i;
for(var j=i; j<morseArray.length; j++)
{
i=j;
if(morseArray[j]!=='')
j=morseArray.length;
if(j-check===1 && morseAns!=='') {
morseAns+=' ';
check=-10;
}
if(j===morseArray.length-1 && morseArray[j]==='') {
if(morseAns.charAt(morseAns.length-1)===' ')
morseAns=morseAns.slice(0,morseAns.length-1);
  console.log(morseAns);
return morseAns;
}
}

}


  if(i<morseArray.length)
  morseAns+=MORSE_CODE[morseArray[i]];
    
  }
  console.log(morseAns);
  return morseAns;
}