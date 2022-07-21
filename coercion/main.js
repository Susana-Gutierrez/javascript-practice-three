// StringCoercio

function stringCoercion() {

  var x = 3;
  var y = "3"

  return x + y;

}


function stringCoercionTwo() {
  var x = 24;
  var y = "Hello";

  return x + y;

}

function stringCoercioThree() {
  var name = "Vivek";
  var surname = " Bisht";

  return name + surname;

}

function stringCoercioFour() {

  var x = 3;
  var y = "3";

  var result = x - y;

  console.log (typeof result);

  return result;

}

function booleanCoercion() {

  var x = 0;
  var y = 23;

  if(x) {
    console.log (x);
  }

  if(y) {
    console.log(y);
  }

}

function logicalOperators() {

  var x = 220;
  var y = "Hello";
  var z = undefined;
  var i = 0;

  console.log ('x || y ', x || y );
  console.log ('x || z ', x || z);
  console.log ('i || z ', i || z)
  console.log ('x && y ', x && y);
  console.log ('y && z ', y && z);
  console.log('i && z ', i && z);
  console.log('z && i ', z && i);

  if ( x && y ){
    console.log ('Code runs');
  }

  if ( x || z){
    console.log("Code runs");
  }

}

function noNumber(){

  console.log(isNaN("Hello"));
  console.log(isNaN(345));
  console.log(isNaN('1'));
  console.log(isNaN(true));
  console.log(isNaN(true));
  console.log(isNaN(undefined));

}
