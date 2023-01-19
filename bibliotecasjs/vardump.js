function vardump(obj) {
  var out = obj;
  for (var i in obj) 
  {
    out +=  "\n\t" + i + ": " + obj[i];
  }

  return out;
}