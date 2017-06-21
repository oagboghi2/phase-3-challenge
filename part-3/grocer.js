///make buttons interactive

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
/////////////////////////
//var itemCount = document.getelementById("cart-item-count");

var itemCount = 0;

var btn1 = function(){
  itemCount+=(1.11);
  document.getElementById("cart-item-count").innerHTML = itemCount;
  console.log(itemCount);
}

var btn2 = function(){
  itemCount+=(1.56);
  document.getElementById("cart-item-count").innerHTML = itemCount;
  console.log(itemCount);
}

var btn3 = function(){
  itemCount+=(2.88);
  document.getElementById("cart-item-count").innerHTML = itemCount;
  console.log(itemCount);
}

var btn4 = function(){
  itemCount+=(1.47);
  document.getElementById("cart-item-count").innerHTML = itemCount;
  console.log(itemCount);
}

var btn5 = function(){
  itemCount+=(2.52);
  document.getElementById("cart-item-count").innerHTML = itemCount;
  console.log(itemCount);
}

var btn6 = function(){
  itemCount+=(14.08);
  document.getElementById("cart-item-count").innerHTML = itemCount;
  console.log(itemCount);
}

var btn7 = function(){
  itemCount+=(16.61);
  document.getElementById("cart-item-count").innerHTML = itemCount;
  console.log(itemCount);
}
///
var addCart = 0;
