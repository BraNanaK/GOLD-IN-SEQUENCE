// Function(s) to find goldern number(s) out of a sequence 
// In a sequence,  a goldern number is a number divisible by the preceding number

/*FIRST FUNCTION*/
/*FIRST FUNCTION*/
function getGoldern(min, max) {
  let goldern = [];
  let preGoldern = [];
  let notGoldern = [];

  count = min + 1; //

  for (let i = min; i <= max; i++) {
    const counta = i + 1;
    if ((counta) % i === 0) { // checks if number is divisible by the preceeding number
      goldern.push(counta); // saves the goldern number in an array
      preGoldern.push(i); // saves preceding number in an array;
    } else {
      notGoldern.push(counta);
    }

  }
  return [goldern, notGoldern];
}

//TODO: remove the comments from the lines below for testing
//const [gold, silver] = getGoldern(1, 2021); // destructures the return values into 'gold' and 'silver'
//console.log(`Goldern Numbers: ${gold}`);  // only goldern numbers are logged 
//console.log(`Not Goldern Numbers: ${silver}`);  // only non-goldern numbers are logged


/*SECOND FUNCTION*/
/*SECOND FUNCTION*/
function locateGoldern(min, max, step) {
  //NOTE: 
  //min: starting point of the sequence
  // max: ending point of the sequence 
  //step: interval between numbers
  const goldern = [];
  const preGoldern = [];
  const notGoldern = [];

  for (let j = min; j <= max; j += step) {
    const counta = j + 5;
    if (counta % j === 0) {
      goldern.push(counta);
      preGoldern.push(j);
    } else {
      notGoldern.push(counta);
    }
  }
  return [goldern, preGoldern, notGoldern];
}

//TODO: remove the comments from the lines below for testing
//const [goldern, preGold, notGold] = locateGoldern(0, 2021, 5); // destructures the return values into 'gold' and 'silver'
//console.log(`Goldern Numbers: ${goldern}`); // only goldern numbers are logged 
//console.log(`Not Goldern Numbers: ${silver}`);  // only non-goldern numbers are logged


/*THIRD FUNCTION*/
/*THIRD FUNCTION*/
function catchGold(sequence) {
  const golds = [];
  const preGolds = [];
  const notGolds = [];

  for (let k = 0; k < sequence.length; k++) {
    const counta = k + 1; // next number in sequence
    if (sequence[counta] % sequence[k] === 0) {
      golds.push(sequence[counta]);
      preGolds.push(sequence[k]);
    } else {
      notGolds.push(sequence[counta]);
    }
  }
  return [golds, preGolds, notGolds];
}

//TODO: remove the comments from the lines below for testing
//const [gold, preGold, notGold] = catchGold([1, 3, 5, 7, 9, 11]); //destructures the return values into 'gold' and 'silver'
//console.log(`Goldern Numbers: ${gold}`); // only goldern numbers are logged 
//console.log(`Not Goldern Numbers: ${preGold}`);  // only non-goldern numbers are logged
