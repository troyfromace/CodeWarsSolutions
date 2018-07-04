function countWins(winnerList, country) {
var count=0; //variable to keep track of count
  for(var i=0; i<winnerList.length; i++) //for loop to go through every entry
  if(winnerList[i].country===country) //checks to see if the country from the array matches with country input
  {
  count++;
  }
  return count;
}