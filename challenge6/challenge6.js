//Create a function that takes an array of numbers 
//and return both the minimum and maximum numbers, in that order.

//find a way to sort from min to max.
// use sort with math.max?
//filter out min and max and pop to new array 
// return new filtered array 


function minMax(arr) {
	let min = Math.min(...arr)
    let max = Math.max(...arr)
    let newArray = []

    newArray.push(min)
    newArray.push(max)

    return newArray

    
}

// const numbersArray = [1,5,7,9]


// console.log(minMax(numbersArray))