/*
CONDITIONAL STATEMENT
1. if...else
2. else if
3. switch
4. Ternary
5. shortcircuit
*/
// if...else
const age = 66
if(age<30){
    console.log("Elder")
}else{
    console.log("Some other age")
}
// else if
if(age<18){
    console.log("You're a child")
}else if(age<65){
    console.log("Civil servant")
}else{
    console.log("Old")
}

// shift() and unshift()
/*
The shift() method removes an array element from the beginning of the array
while the unshift() method adds an element to the beginning of the array
*/
const fruits = ["Apple","Banana","Cherry"]
fruits.shift()
console.log(fruits)
fruits.unshift("Guava")
console.log(fruits)