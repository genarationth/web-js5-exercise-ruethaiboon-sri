// Exercise #1
// Part 1
// There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. 
// Create an array that has these three names in order.

const pplName = ['Sofia', 'David','Juan']
// Part 2
// Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

pplName.push('Sara','Augustin')
pplName.shift()
console.log(pplName)
// Part 3
// It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. 
// What does the queue look like?

pplName.splice(1,0,'Renata')
pplName.push('Elena')
console.log(pplName)


// Exercise #2
// Write a JavaScript program to construct the following pattern, using a nested for loop.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *

let n = 5;
let string = "";
//external loop will take care of columns of pattern
//the internal loop will print rows of the pattern.
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// Exercise #3
// Write while loops to do the following:

// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.
// - Print all the odd numbers between 1 - 100.
let xValue = 100
while (xValue > 0) {
    xValue -= 0.5 //99.5
    if (xValue %2 !== 0){
        console.log(xValue)
    }
}

// - Write a method with a while loop to print 1 through n in square brackets. 
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]

// - Write a method with a while loop that computes the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n1
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190