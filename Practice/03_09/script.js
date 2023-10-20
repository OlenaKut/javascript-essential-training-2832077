/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  newName: function (nameOne) {
    this.name = nameOne;
  },

  volume: 30,
  newVolume: function (volumeOne) {
    this.volume = volumeOne;
  },

  color: "grey",
  newColor: function (colorOne) {
    this.color = colorOne;
  },

  pocketNum: 15,
  newPocketNum: function (changePocketNum) {
    this.pocketNum = changePocketNum;
  },

  strapLength: {
    left: 26,
    right: 26,
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },

  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
};

console.log(backpack);

backpack.newName("RedPack");
backpack.newVolume(60);
backpack.newColor("Red");
backpack.newPocketNum(24);


console.log(backpack);
