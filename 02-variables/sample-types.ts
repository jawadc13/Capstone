let found: boolean = true;
let grade: number = 88.6;
let firstName:string = "Anup";
let lastName:string = 'Kumar';

//breaking it
/*
found = 0;
grade = "A";
firstName= false;
*/
console.log(found);
console.log("The grade is " + grade);
console.log("hi " + firstName + " " + lastName);

//use template strings
console.log(`Hi ${firstName} ${lastName}`)