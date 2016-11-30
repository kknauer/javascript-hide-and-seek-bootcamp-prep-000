function getFirstSelector(selector){

  var s= document.querySelector(`${selector}`);
  return s
}
function nestedTarget(){
  var t =document.getElementById('nested').getElementsByTagName('div')[3]
  return t
}
function increaseRankBy(n){
const list= document.querySelectorAll('.ranked-list li')
var number = n
  for(let i=0, l =list.length; i<l; i++){
    var integ= parseInt(list[i].innerHTML, 10)
    var math = (integ + number)
    list[i].innerHTML = math
  }
}
function deepestChild(){
var result = document.getElementById('grand-node').getElementsByTagName('div')[3]
return result
}
