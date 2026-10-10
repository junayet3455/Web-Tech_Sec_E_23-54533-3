 

let name = prompt("Enter your name:");
let age = parseInt(prompt("Enter your age:"));
let cgpa = parseFloat(prompt("Enter your CGPA:"));
let isStudent = (prompt("Are you a student? (true/false)") === "true");
let grade = prompt("Enter your grade (A/B/C):");


  console.log("Student Name: " + name);
  console.log("Student Age: " + age);
  console.log("Student status: " +isStudent);
  console.log("Grade: " +grade );


 

let courses = [];

for (let i = 0; i < 3; i++) {
    courses[i] = prompt("Enter a course:");
}

console.log("Course:")


for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
 
let marks = parseInt(prompt("Enter your marks:"));

if (marks >= 80) {
    console.log("Grade: A+");
}
else if (marks >= 70) {
    console.log("Grade: A");
}
else if (marks >= 60) {
    console.log("Grade: B");
}
else {
    console.log("Grade: F");
}


function showStudent(name1, age1) {
    console.log("Name: " + name1);
    console.log("Age: " + age1);
}

let name1 = prompt("Enter your name:");
let age1 = parseInt(prompt("Enter your age:"));

showStudent(name1, age1);



let students = [];

for (let i = 0; i < 3; i++) {
    students[i] = prompt("Enter student name:");
}

console.log("Students:");

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}






