/******Day 13: Modules******/
import { add } from "./Task_01.js";
import { userDetails } from "./Task_02.js"; 
import { multiply,addition,division,exponential } from "./Task_03.js";
import sayHello from "./Task_04.js" //impoted without curly braces because it is default export! 

import { student_count,greeting,randomNum } from "./Task_05.js";



console.log("\n <-----Task 1------->\n");

add(10,20);

console.log("\n <-----Task 2------->\n");

console.log(userDetails);

console.log("\n <-----Task 3------->\n");

multiply(3,4,5);
addition(3,4);
division(10,2);
exponential(2,4);

console.log("\n <-----Task 4------->\n");
sayHello("Shubh")

console.log("\n <-----Task 5------->\n");

console.log(student_count);
greeting("shubh");
randomNum();
