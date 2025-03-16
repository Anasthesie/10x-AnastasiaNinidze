// Exercise 1

let GandalfPower = 5;
let DumbledorePower = 10;

const aboutGandaPower = "Gandalf the Grey's new power is:";
const aboutDumbledorePower = "Dumbledore's new power is:";

GandalfPower = GandalfPower + 1;
DumbledorePower = DumbledorePower - 1;

console.log(aboutGandaPower + " " + GandalfPower);
console.log(aboutDumbledorePower + " " + DumbledorePower);

if (GandalfPower > DumbledorePower) {
  console.log("Gandalf the Grey is stronger!");
} else {
  console.log("Dumbledore is stronger!");
}

// Exercise 2

let coinAmounts = 5;
let treasureMap = "map";
let cursedAmulet = true;

treasureMap = 9;

console.log(typeof coinAmounts);
console.log(typeof treasureMap);
console.log(typeof cursedAmulet);

// Exercise 3

let healthPotions = 10;
let manaPotions = 50;
let potionPrices = healthPotions + manaPotions;

if (potionPrices > 50) {
  console.log("Discount!");
} else {
  console.log("No discount!");
}

// Exercise 4

let character = {
  attackPower: 100,
  armorName: "cool",
  hasShield: true,
};

console.log(
  `battle is ready: ${character.attackPower}, ${character.armorName}, ${character.hasShield}`
);

// Exercise 5

let breadPrice = 3;
let breadSold = 50;
let cakePrice = 6;
let cakeSold = 30;
let dailySales = `Earnings: ${breadPrice * breadSold + cakeSold * cakePrice}`;

console.log(dailySales);

// Exercise 6

let fuelCapacity = 200;
let currentFuel = 160;
let fuelPercent = (currentFuel / fuelCapacity) * 100;
if (fuelPercent >= 80) {
  console.log("Ready for launch!");
} else {
  console.log("Launch not recomended!");
}

// Exercise 7

let currentDate = new Date();
let jumpedForward = 100;

currentDate.setFullYear(currentDate.getFullYear() + jumpedForward);
console.log(currentDate);

// Exercise 8

let wizardSpellOne = 9;
let wizardSpellTwo = 5;
let wizardSpeThree = 2;

if (wizardSpellOne > wizardSpellTwo && wizardSpellOne > wizardSpeThree) {
  console.log("The spellOne is stronger!");
}

if (wizardSpellTwo > wizardSpellOne && wizardSpellTwo > wizardSpeThree) {
  console.log("The spellTwo is stronger!");
}

if (wizardSpeThree > wizardSpellOne && wizardSpeThree > wizardSpellTwo) {
  console.log("The spellThree is stronger!");
}

if (wizardSpellOne === wizardSpellTwo && wizardSpellOne === wizardSpeThree) {
  console.log("All spells have the same power.");
}

if (wizardSpellTwo === wizardSpellOne && wizardSpellOne > wizardSpeThree) {
  console.log("First and Second are the same power and stronger than Third.");
}

if (wizardSpeThree === wizardSpellTwo && wizardSpeThree > wizardSpellOne) {
  console.log("Third and Second are the same power and stronger than First.");
}
// Exercise 9

let kitchenHasGhost = false;
let livingRoomHasGhost = false;
let isHouseSafe = !kitchenHasGhost && !livingRoomHasGhost;

if (isHouseSafe) {
  console.log("The house is safe! No ghosts in the Kitchen or Living Room.");
} else {
  console.log("Danger! The house is NOT safe. Ghosts detected");
}

// Exercise 10
let currentBatteryLevel = 30;

if (currentBatteryLevel > 80) {
  console.log("Battery sufficient");
} else {
  console.log("Low battery");
}
