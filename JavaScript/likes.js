function likes(names) {
  if(names.length===0) //we have five case I made an if staement for each one.
    return 'no one likes this';
  
  if(names.length===1)
    return names[0]+' likes this';
    
  if(names.length===2)
    return names[0]+' and '+names[1]+' like this';
    
  if(names.length===3)
    return names[0]+', '+names[1]+' and '+names[2]+' like this';
    
  if(names.length>3)
    return names[0]+', '+names[1]+' and '+(names.length-2)+' others like this';    
    
  
}