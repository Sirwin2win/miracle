/*
A function is a block of code that is defined once and called many times. 
In functional programming, the function is defined either with or without parameters. 
A function does nothing untill it is called.
There are two ways of defining a function in Javascritp
1. function expression
2. function declaration: This type of function definition is used for hoisting i.e calling
a function before it defined
*/
// function expression definition
const greet = function(){
    console.log("Good day everyone")
}
// function call
greet()
// function with a parameter
const square = function(n){
    console.log(n**2)
}
// function call with an arguement
square(3)
square(4)
square(7)
square(10)
// function declaration definition
greet2()
function greet2(){
    console.log("Good day again")
}
// return statement.
function square2(demo){
    return demo**2
}
console.log(square2(5))
// More than one parameter
const angleArea = function(b,h){
    let area = 0.5*b*h
    return area
}
console.log(angleArea(4,10))
const add = function(a){
    let cont = 0
    for(let i = 0; i<a.length;i++){
        cont += a[i]
    }
    return cont
}

console.log(add([1,2,3,4,5,6,7,8,9]))
const num = [1,2,3,4,5,6,7,8,9]
console.log(add(num))
 
const rev = function(r){
    let cont =''
    for(let i = r.length-1; i>=0;i--){
        cont += r[i]
    }
    return cont
}
const school = 'Daily Ads Marketing'
console.log(rev('Daily Ads Marketing'))
console.log(rev(school))
console.log(rev('level'))

const palindrome = function(n){
     let cont =''
    for(let i = n.length-1; i>=0;i--){
        cont += n[i]
    }
    // return cont  ~ `
    if(n==cont){
        return `${n} is a palindrome`
    }else{
        return `${n} is not a palindrome`
    }
}
console.log(palindrome('level'))
console.log(palindrome('anna'))
console.log(palindrome('racecar'))
console.log(palindrome('civic'))
console.log(palindrome('miracle'))
// A function with a function parameter
const res = function(a,b, cb){
    return cb(a,b)
}
const plus = function(i,j){
    return i+j
}
const minus = function(x,y){
    return y-x
}
const multiply = function(l,m){
    return l*m
}

console.log(res(2,3,plus))
console.log(res(2,3,minus))
console.log(res(2,3,multiply))
const rectangleArea = function(l,w){
    let area = l*w
    // 21 + 2w     2(l+w)
    let perimeter = 2*(l+w)
    // return [area,perimeter] 
    return {area:area, perimeter:perimeter}
}
console.log(rectangleArea(4,3))
// A function with a default parameter
const location = function(city='Kukwaba'){
    return `I live in ${city}`
}

console.log(location())
console.log(location("Lugbe"))
// Recursive function: i.e a function that calls itself: 3*2*1
const fact = function(f){
    if(f<=1){
        return 1
    }else{
        return f*fact(f-1)
    }
}
console.log(fact(3))
console.log(fact(4))
// -b+-

/* 
let rut = b**2-(4*a*c)*0.5
let x1 =(-b + rut)/2*a
*/

