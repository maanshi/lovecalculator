alert("welcome to love calculator");
var randomnumber =Math.floor((Math.random()*100)+1);
// alert(randomnumber);
document.getElementById("submit").onclick=function(){
  document.getElementById("love").innerHTML=randomnumber+ "%" ;
}
document.getElementById("click").onclick=function(){
  location.reload();
}
