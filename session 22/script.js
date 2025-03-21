// Easy (7)

// Exercise 1

function compareAttack(pokemon1, attack1, pokemon2, attack2) {
  if (attack1 > attack2) {
    console.log(`${pokemon1} is stronger!`);
  } else {
    console.log(`${pokemon2} is stronger! `);
  }
}
compareAttack("Pikachu", 55, "Charizard", 84);

// Exercise 2

function castSpell(spell, wizard) {
  console.log(`${wizard} casts ${spell}`);
}
castSpell("Hermione", "Expelliarmus");

// Exercise 3

function calculateBounty(currentBounty, increase) {
  return currentBounty + increase;
}
let bounty = calculateBounty(1500000000, 500000000);
console.log(bounty);

// Exercise 4

function trainJedi(name, strength = 50) {
  return `${name} has ${strength} power`;
}
let lukesNameAndStrenght = trainJedi("Luke", 100);
let reyName = trainJedi("Rey");
console.log(lukesNameAndStrenght);
console.log(reyName);

// Exercise 5

function gollumSays(phrase) {
  return `${phrase}... ${phrase}... ${phrase}...`;
}

console.log(gollumSays("My precious"));

// Exercise 6

function powerUp(jumpHeight) {
  return jumpHeight * 2;
}

console.log(powerUp(5));

// Exercise 7
const shadowClone = (count) => {
  return count * 5;
};

console.log(`${shadowClone(10)} clones created!`);

// Easy exercises done //

// Medium(4)

// Exercise 8 will be done after explaining <3. //

// Exercise 9
function snapFingers() {
  let stones = 6;
  function checkStones() {
    console.log(`Thanos has ${stones} stones. The universe trembles!`);
  }
  checkStones();
}

snapFingers();

// Exercise 10

turnBackTime();

function turnBackTime() {
  console.log("Going back in time!");
}
// ჯს დადეკლარირებულ ფუნქციებს სკოუპის თავში აიტანს, მაგრამ ,რა თქმა უნდა, ამას ჩვენ ვერ ვხედავთ - Hoisting! //

// Exercise 11 will be done after explaining <3. //
