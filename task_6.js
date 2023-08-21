function curry(func, arity) {
    return function curriedFunc(...args) {
        if (args.length == arity) {
            return func(...args);
        } else {
            return function (...nextArgs) {
                return curriedFunc(...args, ...nextArgs);
            };
        }
    };
}



function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2); // Returns a curried function  
const step2 = step1(3); // Returns a curried function  
const result = step2(4); // Returns the final result: 2 * 3 * 4 = 24  

console.log("Result:", result); // Expected: 24








/* 
Extend your currying function to allow partial application. Implement a special symbol (e.g., _) 
that represents a placeholder for missing arguments. The curried function should be able to accept 
arguments in any order, while placeholders are used for missing arguments.
 */
const placeholder = '_';

function curryChallenge(func, arity) {
    return function curriedFunc(...args) {
        if (args.length >= arity) {
            let test = args.filter(arg => arg !== placeholder)
            return func(...test);
        } else {
            return function (...nextArgs) {
                return curriedFunc(...args, ...nextArgs);
            };
        }
    };
}

function multiplyTest(a = 1, b = 1, c = 1) {
    return a * b * c;
}

const curriedMultiplyChallenge = curryChallenge(multiplyTest, 3);
const result2 = curriedMultiplyChallenge('_', 5, 2);
console.log("Result Challenge:", result2);
