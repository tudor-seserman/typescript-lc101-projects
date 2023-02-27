"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SpaceLocation_1 = require("./SpaceLocation");
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
// const spacecraftName: string = 'Determination';
// // const speedMph: number = 17500;
const kilometersToMars = 225000000;
const kilometersToTheMoon = 384400;
// // const milesPerKilometer: number = 0.621;
// // Part 2: Print Days to Mars
// const milesToMars: number = kilometersToMars * milesPerKilometer
// const hoursToMars: number = milesToMars/speedMph;
// const daysToMars: number = hoursToMars/24;
// Code an output statement here (use a template literal):
// console.log(`Use template literal syntax and the variables ${spacecraftName} and ${daysToMars}.`)
// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway:number):number{
//     const milesAway: number = kilometersAway * milesPerKilometer
//     const hoursToLocation: number = milesAway/speedMph;
//     const daysToLocation: number = hoursToLocation/24;
//     return daysToLocation
// }
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`Refactor the template literal to use ${getDaysToLocation(kilometersToMars)} and ${spacecraftName}.`)
// console.log(`${getDaysToLocation(kilometersToTheMoon)} and ${spacecraftName}.`)
// Part 4: Create a Spacecraft Class
class Spacecraft {
    constructor(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kilometersAway) {
        const milesAway = kilometersAway * this.milesPerKilometer;
        const hoursToLocation = milesAway / this.speedMph;
        const daysToLocation = hoursToLocation / 24;
        return daysToLocation;
    }
    printDaysToLocation(location) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}
// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`Use template literals, ${spaceShuttle.getDaysToLocation(kilometersToMars)} and ${spaceShuttle.name}.`)
// console.log(`Use template literals, ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} and ${spaceShuttle.name}.`)
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
//# sourceMappingURL=parts1-5.js.map