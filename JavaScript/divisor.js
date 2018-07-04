function divisors(integer) {
  var div=[]; //answer array
  var pos=0; //keeps track of position of array
  
  for(var i=2; i<=(integer/2); i++) {
  if((integer/i)===Math.floor(integer/i)) { 
  div[pos]=i;
  pos++;
  }
  }
  
  if(div[0]>1)
  return div;
  else return integer+" is prime";
  
};