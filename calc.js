const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');

	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	if (mathSymbol === '+') {
		let sum = num1 + num2;
		console.log(`${num1} + ${num2} = ${sum}`)
	}
	else if (mathSymbol === '-') {
		let sum = num1 - num2;
		console.log(`${num1} - ${num2} = ${sum}`)
	}
	else if (mathSymbol === '/') {
		let sum = num1 / num2;
		console.log(`${sum1} / ${sum2} = ${sum}`)
	}
	else if (mathSymbol === '*') {
		let sum = num1 * num2;
		console.log(`${sum1} * ${sum2} = ${sum}`)
	}
	else if (mathSymbol === 'sqrt') {
		let sum = Math.sqrt(num1);
		console.log(`The square root of ${num1} is ${sum}`)
	}
	else if (mathSymbol === '^2') {
		let sum = num1 * num1;
		console.log(`${num1} squared is ${sum}`)
	}
	else if (mathSymbol === '^3') {
		let sum = num1*num1*num1;
		console.log(`${num1} cubed is${sum}`)
	}
	else if (mathSymbol === '^') {
		let power = num1;
		for(let i =1; i < num2; i++) {
			power=power*num1;
		}
		console.log(`${num1} to the power of ${num2} is ${power}`);
	}
	else if (mathSymbol === '%') {
		let remain = num1 % num2;
		console.log(`${num1} divided by ${num2} leaves a remainder of ${remain}`)
	}
	else {
		console.log('Please make a valid entry');
	}

	// This line closes the connection to the command line interface.
	reader.close()

});


