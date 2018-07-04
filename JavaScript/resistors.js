function ColorNumber(s){
switch(s){
case "black":
return 0;
break;
case "brown":
return 1;
break;
case "red":
return 2;
break;
case "orange":
return 3;
break;
case "yellow":
return 4;
break;
case "green":
return 5;
break;
case "blue":
return 6;
break;
case "violet":
return 7;
break;
case "gray":
return 8;
break;
case "white":
return 9;
break;



}
} //function input color and get 0-9 colors

function ResNumber(s){
switch(s)
{
case "gold":
return "5%";
break;
case "silver":
return "10%";
break;
default:
return "20%";
}
} //function input error color and get error %


function decodeResistorColors(bands) {
var BandArray=bands.split(" "); //We make an array of color words
var answer="";
var start=10*ColorNumber(BandArray[0])+ColorNumber(BandArray[1]); //number
var power=ColorNumber(BandArray[2]); //power
var tens=1;
for(var i=0; i<power; i++) //mkaes ten the correct power of ten
tens=tens*10;

var multiplied=start*tens; //multplies the number out

//if statements for the three different formats
if(multiplied<1000) 
  answer=multiplied+" ohms, "+ResNumber(BandArray[3]);
if(multiplied>=1000 && multiplied<1000000)
  answer=multiplied/1000+"k ohms, "+ResNumber(BandArray[3]);
if(multiplied>=1000000)
  answer=multiplied/1000000+"M ohms, "+ResNumber(BandArray[3]);


  return answer;
}

