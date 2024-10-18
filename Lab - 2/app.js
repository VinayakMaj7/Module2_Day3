console.log("Welcome to the world of Web Dev");

function welcomeMs(){
    let user = prompt("Enter User Name: ")
    console.log("Entered User Name is ", user);
    
    let confirmation = confirm(`Do you agree to our T&Cs, ${user}`)
    if(confirmation==true){
        alert(`Welcome to our app, ${user}`)
    }else{
        alert(`Please agree to our T&C to continue`)
    }
}

welcomeMs()

// function sum2(){
//     let num1 = Number(prompt("Enter number 1: "));
//     let num2 = Number(prompt("Enter number 2: "));
//     let sum = num1 + num2;
//     alert(`The sum of the numbers are: ${sum}`);
// }
// sum2()

