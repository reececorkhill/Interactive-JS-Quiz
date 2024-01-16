// Array of objects which contain the question, possible answer choices and the correct answer choice.
var questionsAndAnswers = [
    {
        question: "What is the abbreviation for JavaScript?",
        answerChoices: ["Jsx", "Java", "Js", "Jscript"],
        correctChoice: "Js"
    },
    {
        question: "What kind of language is JavaScript?",
        answerChoices: ["Imperative", "Functional", "Logical", "Object-Oriented"],
        correctChoice: "Object-Oriented"
    },
    {
        question: "What is the purpose of the let keyword in JavaScript?",
        answerChoices: ["To declare a constant variable.", "To declare a variable with block scope.", "To declare a global variable.", "To declare a function."],
        correctChoice: "To declare a variable with block scope."
    },
    {
        question: "What is the result of typeof null in JavaScript?",
        answerChoices: ["object", "null", "undefined", "string"],
        correctChoice: "object"
    },
    {
        question: "What is the correct way to comment a single line in JavaScript?",
        answerChoices: ["// This is a comment", "/* This is a comment */", "-- This is a comment", "# This is a comment"],
        correctChoice: "// This is a comment"
    },
    {
        question: "How can you check if a variable is an array in JavaScript?",
        answerChoices: ["isArray(variable)", "variable.isTypeOf('array')", "typeof variable === 'array'", "variable instanceof Array"],
        correctChoice: "isArray(variable)"
    },
    {
        question: "What is the purpose of the setTimeout function in JavaScript?",
        answerChoices: ["To set the current time.", "To delay the execution of a function.", "To repeat a function at intervals.", "To measure the time taken by a function."],
        correctChoice: "To delay the execution of a function."
    },
    {
        question: "Which of the following is a falsy value in JavaScript?",
        answerChoices: ["0", "true", "[]", "undefined"],
        correctChoice: "0"
    },
    {
        question: "What does the === operator in JavaScript compare?",
        answerChoices: ["Values and types.", "Values only.", "Types only.", "None of the these."],
        correctChoice: "Values and types."
    },
    {
        question: "How can you convert a string to a number in JavaScript?",
        answerChoices: ["Number(string)", "string.toNumber()", "parseInt(string)", "string.convertToNumber()"],
        correctChoice: "Number(string)"
    },
    {
        question: "What is the purpose of the this keyword in JavaScript?",
        answerChoices: ["It refers to the current function.", "It refers to the global object.", "It refers to the object that is executing the current function.", "It refers to the parent object."],
        correctChoice: "It refers to the object that is executing the current function."
    },
    {
        question: "What is the role of the return statement in a JavaScript function?",
        answerChoices: ["To stop the execution of the function.", "To return a value from the function.", "To declare a variable.", "To define a loop."],
        correctChoice: "To return a value from the function."
    },
    {
        question: "What is the purpose of the const keyword in JavaScript?",
        answerChoices: ["To declare a variable with block scope.", "To declare a constant variable.", "To declare a variable with function scope.", "To declare a global variable."],
        correctChoice: "To declare a constant variable."
    },
    {
        question: "How do you properly declare a function in JavaScript?",
        answerChoices: ["function = myFunction() {}", "declare function myFunction() {}", "function myFunction() {}", "def myFunction() {}"],
        correctChoice: "function myFunction() {}"
    },
    {
        question: "What does the Array.push() method do in JavaScript?",
        answerChoices: ["Removes the last element from an array.", "Adds elements to the beginning of an array.", "Adds elements to the end of an array.", "Creates a new array."],
        correctChoice: "Adds elements to the end of an array."
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        answerChoices: ["==", "!=", "===", "!=="],
        correctChoice: "==="
    },
    {
        question: "What is the purpose of the map method in JavaScript arrays?",
        answerChoices: ["To create a new array with the results of calling a provided function on every element.", "To remove elements from an array.", "To reverse the order of elements in an array.", "To sort the elements of an array."],
        correctChoice: "To create a new array with the results of calling a provided function on every element."
    },
    {
        question: "What does the JSON.stringify() function do in JavaScript?",
        answerChoices: ["Parses a JSON string and returns an object.", "Converts a JavaScript object to a JSON string.", "Decodes a base64-encoded string.", "Compares two JSON objects for equality."],
        correctChoice: "Converts a JavaScript object to a JSON string."
    },
    {
        question: "What is the purpose of the try...catch statement in JavaScript?",
        answerChoices: ["To define a loop.", "To handle asynchronous code.", "To catch and handle exceptions.", "To create a new function."],
        correctChoice: "To catch and handle exceptions."
    },
    {
        question: "How can you remove the last element from an array in JavaScript?",
        answerChoices: ["array.removeLast()", "array.pop()", "array.splice(-1, 1)", "array.slice(-1)"],
        correctChoice: "array.pop()"
    }
];