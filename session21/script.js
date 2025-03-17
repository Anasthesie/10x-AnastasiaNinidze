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

// Exercise 11
let dragonHealth = 100;
let knightAttackDamage = 25;

dragonHealth -= knightAttackDamage;

console.log(`Dragon's Health After Attack: ${dragonHealth}`);

// Exercise 12
let speedLimit = 50;
let carSpeed = 30;

carSpeed += 25;

if (carSpeed > speedLimit) {
  console.log("Speed Warning: You are going too fast!");
} else {
  console.log("Speed is okay");
}

console.log(`Current Speed: ${carSpeed}`);

// Exercise 13
let heroStrength = 95;
let villainStrength = 90;

if (heroStrength === villainStrength - 10) {
}

// Exercise 14
let hasTreasureMap = true;
let foundAncientKey = false;
let solvedRiddleScroll = true;
let hasCompass = true;
let isFullMoon = false;
let canFindTreasure =
  (hasTreasureMap && foundAncientKey) ||
  (hasTreasureMap && solvedRiddleScroll) ||
  (solvedRiddleScroll && hasCompass);

if (canFindTreasure) {
  console.log("Success! Alex can find the legendary treasure!");
} else {
  console.log(
    " Alas, Alex is missing crucial clues and cannot find the treasure yet."
  );
}

// Exercise 15

let IceCreamCone = 4;
let IceCreamSundae = 8;
let conesSoldToday = 250;
let sundaesSoldToday = 120;
let earningsCone = IceCreamCone * conesSoldToday;
let earningsSundaes = IceCreamSundae * sundaesSoldToday;
let total = earningsCone + earningsSundaes;

console.log(`Total earnings before discount ${total}`);

if (total >= 1000) {
  let totalWithDiscount = total * 0.95;
  console.log("Volume Discount Applied: Yes");
} else {
  console.log("Volume Discount Applied: No");
}

// Exercise 16
let ticketPrice = 20;
let ticketsSold = 500;
let concertCosts = 8000;

let totalEarnings = ticketPrice * ticketsSold;
let totalProfit = totalEarnings - concertCosts;

if (totalProfit > 0) {
  let totalProfit = totalEarnings - concertCosts;
  console.log(`Concert Profit: ${totalProfit}. Great success!`);
} else {
  console.log(
    `Concert did not cover costs. Earnings: $${totalEarnings}, Costs: $${concertCosts}.`
  );
}
