/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const cat = {
  name: "Alisa",
  rase: "Scottish Fold",
  color: "brown",
  paws: {
    front: {
      left: 1,
      right: 1,
    },
    back: {
      left: 1,
      right: 1,
    },
  },
  move: false,
};

console.log(cat);
