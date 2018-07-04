function list(names){

  if(names.length===0)
  return '';
  
  if(names.length===1)
  return names[0].name;
  
  if(names.length===2)
  return names[0].name+' & '+names[1].name;
  
  var str='';
  
  for(var i=0; i<names.length-2; i++)
  str=str+names[i].name+', ';
  
  str=str+names[names.length-2].name+' & '+names[names.length-1].name;
  
  return str;
  
}