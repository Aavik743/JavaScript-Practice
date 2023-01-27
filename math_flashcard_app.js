// readline module to take input from user

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//  generate two random numbers
var numOne = Math.floor(Math.random() * 11)
var numTwo = Math.ceil(Math.random() * 11)


function ask_question(one, two) {
    //  using the readline module
    r1.question(`Add the two numbers ${numOne} and ${numTwo} :  `, (answer) =>{
            console.log()
            var answer = answer;
            if (isNaN(answer)){
                console.log(' Enter a number')
                console.log()
                ask_question(one,two)
            }
            else if (answer == (numOne + numTwo)){
                console.log('Yes!, the correct answer is ' + answer)
                r1.close()
            }
            else{
                console.log('You are stupid')
                r1.close()
            }
            console.log()
        });
    }

ask_question(numOne, numTwo);    







