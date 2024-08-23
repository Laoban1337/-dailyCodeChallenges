//Create a function which returns the number of true values there are in an array.

// set counter for trues
//check if the array contains a true value and incriment 
//if there are no true values return 0
// use a map or a forloop to check all the items in the array? (filter)

function countTrue(arr) {
  const target = true

   const count = arr.filter(item => item === target).length

   return count;

}


console.log(countTrue([]))