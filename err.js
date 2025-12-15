/*
Errors are part of our programs. The way we manage them determines how well our programs will run. Usually,
some error crash the program. The ability to manage the error in such a way that it does not crash
our program is called error handling. We handle error using the try...catch block
try{
// this is where we put the code we want to try out
}catch(error){
// this is where we put message that explains what went wrong if an error occurs in the try block
}finally{
// this is what runs whether error or no error e.g clean up code
}
*/
// console.log(name)
try {
    console.log("Hello world")
    // console.log(name)
} catch (error) { // error is an object with 1. type , 2. message
    console.log("Baba check weting you dey type", error.message)
}finally{
    console.log("Done!")
}
console.log(new Date().getFullYear())
