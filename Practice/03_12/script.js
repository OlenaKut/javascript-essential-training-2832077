import Cat from "./Cat.js";

const cat = new Cat(
  "Alisa",
  "Fold",
  "3.5",
  "brown",
  4,
  false,
  "December 13, 2019 15:00:00 PST"
);

console.log(cat);

cat.newMove(true);
console.log(cat);
console.log(cat.alisaAge());
console.log(cat.alisaAgeMonth());
