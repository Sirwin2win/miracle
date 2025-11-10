/*
Loop is used to iterate(to count through) an iterable(collection, array)
as long as a condition is true.
1. for loop
2. while loop
3. do while loop
4. for of loop
5. for in loop
Syntax : talks about guiding rule of the language
Loop Syntax:
for(initialization;condition;increment/decrement){
// Loop body
}
*/
// Looping through an array and collecting the values in a container
const nums = [1,2,3,4,5,6,7,8,9]
let cont = 0
for(let demo = 0; demo<nums.length; demo++){
    // console.log(nums[demo])
    cont +=nums[demo]
}
console.log(cont)
// Looping through array of arrays using a nested loop
const nums2 = [[1,2,3],[4,5,6],[7,8,9]]
// nums2[1][0]
let basin = 0
for(let i = 0; i<nums2.length; i++){
    // console.log(nums2[i])
    for(let j = 0; j<nums2[i].length; j++){
        basin += nums2[i][j]
    }
}
console.log(basin)
// In programming, strings are handled like arrays
const school = 'Daily Ads Academy'
for(let i = 0; i<school.length; i++){
    console.log(school[i])
}
// Looping through 'school' from the back and collecting the them in a container
let tab = ''
let index = school.length-1
for(let i = index; i>=0; i--){
    tab +=school[i]
}
console.log(tab)
// The while loop
/*
This loop type is similar to the for-loop but runs its iteration while a
condition is true.
Syntax
initialization
while(condition){
// loop body
increment/decrement
}
*/
const fruits = ["Apple","Banana","Cherry","Guava"]
// Looping through the fruits array using the while loop
let j = 0
while(j<fruits.length){
    console.log(fruits[j])
    j++
}
// Looping the school from the back using while loop
let k = school.length-1
let info = ''
while(k>=0){
    info += school[k]
    k--
}
console.log(info)
// Looping through the nested array(nums2) using the while loop
// const nums2 = [[1,2,3],[4,5,6],[7,8,9]]
let l = 0
let result  = 0
while(l<nums2.length){
    // console.log(nums2[l])
    let m = 0
    while(m<nums2[l].length){
        result += nums2[l][m]
        m++
    }
    l++
}
console.log(result)
// The do while loop
/*
Syntax:
initialization
do{
// Loop body
incremet/decrement
}while(condition)
*/
// Looping through the fruits array using the do while loop
let n  = 0
do{
    console.log(fruits[n])
    n++
}while(n<fruits.length)
// Class work; find the sum of the following array. Using while loop
const nu = [1,2,3,4,5]
// Looping through the school string using the do while loop
let o = school.length-1
let req = ''
do{
    req += school[o]
    o--
}while(o>=0)
console.log(req)
// Summing up the nums2 array using the do while loop
let p = 0
let net = 0
do{
    let q = 0
    do{
        net += nums2[p][q]
        q++
    }while(q<nums2[p].length)
    p++
}while(p<nums2.length)
    console.log(net)

// Looping through an array using the for of loop
// looping the fruits array
for(let i of fruits){
    console.log(i)
}
// Looping through the nums2 using the for of loop and returning the sum
let house = 0
for(let i of nums2){
    for(let j of i){
        house += j
    }
}
console.log(house)
