let origDogs = ["BullDog", "Beagle", "Labrador"];
let cats = new Array("Animal Curl", "Bengal");
let birds = new Array("Falcons", "Ducks", "Flamingoes");

let slicedDogs = origDogs.slice(1, 2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

let pushDogs = dogs.push("Golden Retriever");
let popDogs = dogs.pop();
dogs[dogs.length] = "Poodle";

let addFirst = dogs.unshift("GoldenRetriever");
let shiftDog = dogs.shift();

dogs.splice(2, 1, "Pug", "Boxer");

let animals = dogs.concat(cats,birds);
let newAn9imal = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first, second]) {console.log("Scan: "+first+" "+second);}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allanimals = "";
for(let animal of animals) allanimals += animal = " ";

console.log("Animals: "+allanimals);