const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (number1) => {
    rl.question('Enter the operator (+, -, *, /): ', (operator) => {
        rl.question('Enter the second number: ', (number2) => {
            let result;
            switch(operator) {
                case '+':
                    result = parseFloat(number1) + parseFloat(number2);
                    break;
                case '-':
                    result = parseFloat(number1) - parseFloat(number2);
                    break;
                case '*':
                    result = parseFloat(number1) * parseFloat(number2);
                    break;
                case '/':
                    if(number2 != 0) {
                        result = parseFloat(number1) / parseFloat(number2);
                    } else {
                        console.log('Error! Division by zero is not allowed.');
                        rl.close();
                        return;
                    }
                    break;
                default:
                    console.log(`Error! Operator '${operator}' is not supported.`);
                    rl.close();
                    return;
            }
            console.log(`The result is: ${result}`);
            rl.close();
        });
    });
});

// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/test.test.js
const readline = require('readline');
const rl = require('./test');

jest.mock('readline', () => ({
  createInterface: jest.fn()
}));

describe('Readline Interface', () => {
  it('should create an interface with correct parameters', () => {
    expect(readline.createInterface).toHaveBeenCalledWith({
      input: process.stdin,
      output: process.stdout
    });
  });
});