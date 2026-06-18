import createHashMap from "./HashMap.js";

const test = createHashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
// test.set("dog", "brown");
// test.set("elephant", "gray");
// test.set("frog", "green");
// test.set("grape", "purple");
// test.set("hat", "black");
// test.set("ice cream", "white");
// test.set("jacket", "blue");
// test.set("kite", "pink");
// test.set("lion", "golden");
test.set("moon", "silver");

// let res = test.get("moon");
// console.log(`Should say silver: ${res}`);
// res = test.get("shite");
// console.log(`Should be null: ${res}`);

// let has = test.has("moon");
// console.log(`Should say true: ${has}`);
// has = test.has("shite");
// console.log(`Should say false: ${has}`);

test.set("moon", "gold");

console.log(test.myEntries());
