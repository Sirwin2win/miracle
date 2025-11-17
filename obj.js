const num = [3,null,4,null,5,6,null,7]

const arr = num.filter((v)=> v !== null)
console.log(arr)
const arr2 = arr.map((v)=> v**2)
console.log(arr2)
const t = arr2.filter((v)=> v>20)
console.log(t)
/*
Ways of creating an object
1. Object Literal
2. Using the object constructor function
*/
// Object literal
const car = {
    name:'Ford',
    year:2025
}
console.log(car)
// CRUD Create Read Update Delete
// Read
console.log(car.name)
console.log(car['name'])
console.log(car['year'])
// Update
car['name'] = 'Toyota'
car.color = 'red'
car['engineNo']='ZXY25364'
console.log(car)
// Delete
delete car.engineNo
console.log(car)
// Looping through an object using the 'for in loop'
for(let i in car){
    console.log(`${i} => ${car[i]}`)
}
car.details = function(){
    return `I am ${this.name}, i was produced in ${this.year} and i have ${this.color} color `
}
console.log(car.details())

const square = function(a){
    return a**2
}
const mth = {
    name:"Maths",
    eqn:square,
    info:function(){
        return `The Mathematics name is ${this.name}`
    }
}
console.log(mth.name)
console.log(mth.eqn(5))
console.log(mth.info())
// Create an object called animal and give any two key/value pairs of your choice
// Creating an object using the constructor function
// The 'this' keyword is like a placeholder holding the name of the object
//  at the definition of the constructor function
function Human(name, age, height){
    this.name = name
    this.age = age
    this.height = height
}

const ade = new Human("Ademola Adetokumbu",20,5.7)
console.log(ade)
console.log(ade.name)

const ola = new Human("Olamide Taiwo",23, 5.9)
console.log(ola)

function Student(name, email,discipline,institution='UniAbuja'){
        this.name = name
        this.email = email
        this.institution = institution
        this.discipline = discipline
        this.info = function(){
            return `My name is ${this.name}, you can email me on ${this.email}. I read ${this.discipline}`
        }
}
const miracle = new Student("Miracle Okwiri",'okwirimiracle@gmail.com',"Computer Science")
console.log(miracle)
console.log(miracle.name)
console.log(miracle.email)
console.log(miracle.info())

function Account(name,bal=0){
    this.name = name
    this.bal = bal
    this.balanceEnquiry = function(){
        return `$${this.bal}`
    }
    this.deposit = function(amount){
        this.bal += amount
        return `Account succeesfully credited with $${amount}. total Balance: $${this.bal}`
    }
    this.withdraw = function(amount){
        if(this.bal < amount){
            return "Insufficient funds!"
        }else{
            this.bal -= amount
            return `$${amount} withdrawn successfully!`
        }
    }
}

const uche = new Account("Uchechukwu Ogbonna")
console.log(uche)
console.log(uche.deposit(10000))
// console.log(uche.balanceEnquiry())
console.log(uche.withdraw(5000))

const name = 'John Doe'
console.log(name.toUpperCase())

const emeka = new Account("Chukwuemeka Odumegwu", 20000)
console.log(emeka)
console.log(emeka.withdraw(15000))
// Nested objects
function Animal(name,legs,age){
    this.name = name
    this.legs = legs
    this.age = age
    this.sound = function(a){
        return `${this.name} ${a}`
    }
    this.movement = function(n){
        return `${this.name} ${n}`
    }
}
const lion = new Animal("Lion",4,3)
console.log(lion)
console.log(lion.sound('roars'))
console.log(lion.movement('runs'))
