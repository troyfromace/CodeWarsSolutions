var number = function(busStops){
  // Good Luck!
  var sofar=0; //dummy variable to keep track of people so far
  for(var i=0; i<busStops.length; i++) { //for loop to run through every array in the array
  sofar=sofar+busStops[i][0]-busStops[i][1]; //adds people getting on to the total and subtracts people getting off
  }
  return sofar;
}