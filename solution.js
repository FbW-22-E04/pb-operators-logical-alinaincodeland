// 1

var isDogBetter = true;
var isCatBetter = false; 

console.log(isDogBetter && isCatBetter); 

console.log (isDogBetter || isCatBetter);

console.log (!(isDogBetter && isCatBetter));


// 2 
var atoms = 5;
var sandGrains = 10; 
var starsInSky = 15; 

// a
if  (atoms > starsInSky && atoms > sandGrains) {

    console.log('true');
  } else {
    console.log('false');
  }
  
// b
if  (atoms != sandGrains) {

    console.log('true');
  } else {
    console.log('false');
  }
  

// c

if  (atoms < starsInSky || atoms < starsInSky) {

    console.log('true');
  } else {
    console.log('false');
  }

// d

if  (atoms === starsInSky || atoms != sandGrains) {

    console.log('true');
  } else {
    console.log('false');
  }


// e

if  (atoms >= 10 && sandGrains <= 10) {

    console.log('true');
  } else {
    console.log('false');
  }

// f

if  (atoms * starsInSky < 100 || atoms * sandGrains > 100) {

    console.log('true');
  } else {
    console.log('false');
  }


