// Easy Tasks
// 1 task
const students = ["Harry", "Hermione", "Ron", "Draco"];
const randomHouses = ["Gryffindor", "Ravenclaw", "Slytherin", "x"];
const empty = [];

students.map((value) => {
  const randomNumber = Math.floor(Math.random() * 4);

  const studentsWithhouses = value + "-" + randomHouses[randomNumber];
  empty.push(studentsWithhouses);
});
console.log(empty);

// 2 task
const power = [
  { name: "Pikachu", CP: 320 },
  { name: "Charizard", CP: 900 },
];
const filtered = power.filter((value) => {
  return value.CP > 500;
});
console.log(filtered);
// 3 task
const AvengerMission = [
  { hero: "Iron Man", budget: 5000 },
  { hero: "Hulk", budget: 2000 },
];
const sum = AvengerMission.reduce((total, value) => {
  return total + value.budget;
}, 0);
console.log("Total budget:" + " " + `${sum}`);

// 4 task
const directions = ["left", "right", "forward"];
const directionarray = [];

directions.map((value) => {
  const fulldirection = "Move" + " " + value;
  directionarray.push(fulldirection);
});
console.log(directionarray);

// Norm tasks
// 5 task

const jediNames = ["Luke", "Obi-Wan", "Yoda", "Anakin"];
const findName = jediNames.find((value) => {
  return value === "Yoda";
});
if (findName) {
  console.log("Master found!");
}

// 6 task
const bag = [];
bag.push("Lembas Bread");
bag.push("ring");
bag.pop();
console.log(bag);

// 7 task
const locations = ["Times Square", "Central Park", "Brooklyn"];
locations.sort();
console.log(locations);

//  8 task
const events = [
  "Dormammu Attack",
  "Multiverse Glitch",
  "Ancient One's Warning",
  "Time Loop",
  "Portal Opening",
];
const newEvents = events.slice(-3);
console.log(newEvents);

// Hard tasks
// 9 task
const dataFromMatrix = [3, 7, 15, 22];
const forConvertation = [];
const binaryConversion = dataFromMatrix.map((value) => {
  const convert = value.toString(2);
  forConvertation.push(convert);
});
console.log(forConvertation);
const highestValue = dataFromMatrix.reduce((a, b) => Math.max(a, b));
console.log(highestValue);

// 10 task
const riskLevels = [99, 135, 76, 200, 150, 89];

// map
const mapingLevels = riskLevels.map((value) => {
  return value.toString(16).padStart(2, "0");
});
console.log(`Hex values: ${mapingLevels}`);
// filter
const riskFilter = riskLevels.filter((value) => {
  return value > 100;
});
// reduce
console.log(`Filtered high risks: ${riskFilter}`);
const totalRisks = riskLevels.reduce((total, value) => {
  return total + value;
});
console.log(`Total risk level: ${totalRisks}`);
// find
const findAboveRisk = riskLevels.find((value) => {
  return value > 150;
});
console.log(`First risk above 150: ${findAboveRisk}`);
// splice
const spliceRisk = riskLevels.splice(2, 1);
console.log(`Cleaned data (after removing <80): ${riskLevels}`);
