import {getRectangle} from "./javascript/src/get_rectangle.js";
import {getArea, getCircumference, getDiameter} from "./javascript/src/geometry.js";
import {getAngle} from "./javascript/src/get_angle_of_triangle.js";
import {getDifferenceInDays} from "./javascript/src/get_date_dif_days.js";
import {getInitial} from "./javascript/src/get_initial_name.js";

console.log("Hellow Cakrawala!");
let length = 5;
let width = 3;
console.log(getRectangle(length, width));
let radius = 5;
////////////////////////////////////////////////////////////
console.log("diameter = " + getDiameter(radius) + ", circumference = " + getCircumference(radius) + ", area = " + getArea(radius));
////////////////////////////////////////////////////////////
let a = 80;
let b = 65;
console.log(getAngle(a, b));
////////////////////////////////////////////////////////////
let date1 = new Date("2024-03-19");
let date2 = new Date("2024-03-21");
console.log(getDifferenceInDays(date1, date2));
////////////////////////////////////////////////////////////
let fullName = "Yayan D Wicaksono";
console.log(getInitial(fullName));