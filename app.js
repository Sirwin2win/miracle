console.log("Hello World!")
//  Syntax is guiding rule
// var, const, let
/*
Variable is a container for storing values.
Variable scope: talking about where the variable was declared
Best ways of choosing variable names
1. Camel Case: firstName, lastName
2. Pascal Case: MiddleName, LastName
3. Snake Case: first_name, last_name
*/
const name = "John Doe"
const double = function(n){
    let a = 2
    console.log(n*a)
}
double(5)
// Checking data types 
console.log(typeof name)
const address = "No 5 Ike's Ave"
console.log(address)
/*
JavaScript Operators 
They're used to carry out operations on the variables
1. Arithmetic Operators : +;-;/;*;**;%
2. Assignment Operators: =, +=, -=, /=, *=, **=, %=
3. Comparison Operators: <,>,<=,>=,==,===,!=
4. Logical Operators: || , &&
*/
//  1. Arithmetic Operators : +;-;/;*;**;%
let a = 3
let b = 5
let d = '4'
let c = a+b
console.log(c)
console.log(a+d)
console.log(3+5)
console.log(b-a)
console.log(9/a)
console.log(25/3)
console.log(a*b)
console.log(a**2)
console.log(25**2)
console.log(25%3)
console.log(100%2)
// 2. Assignment Operators: =, +=, -=, /=, *=, **=, %=
let i = 4
let j = 5
console.log(i += 3) // i = i+3
console.log(i -= 1)
console.log(i /= 2)
console.log(i *= 4)
console.log(j **= 2)
console.log(j %= 2)
console.log(j)

// 3. Comparison Operators: <,>,<=,>=,==,===,!=

let l = 5
let m = 6
let n = 6
let o = '5'
console.log(l<m)
console.log(l>m)
console.log(m>=n)
console.log(m<=n)
console.log(m!=n)
console.log(l===o)
console.log(typeof o)

// 4. Logical Operators: || , &&
console.log(l<m && m>=n)
console.log(l<m || l>m || l===o)

