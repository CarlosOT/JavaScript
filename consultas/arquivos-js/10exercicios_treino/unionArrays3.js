
function unionArrays3(a1, a2){
  var a  = a1;
  var b = a2;
  var union  = [... new Set([... a1,... a2])];
  return union;
}
