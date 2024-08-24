//Write a function redundant that takes in a string str
//and returns a function that returns str.

function redundant(str) {

  const displayInput = str;

  function display() {
    return displayInput
  }

  return display;
}

