import { filterGender } from "../src/js/data.js";

const characters = [
  { name: "Juan", gender: "Male" },
  { name: "Carla", gender: "Female" },
  { name: "Rodrigo", gender: "Male" },
];

const charactersResult = [
  { name: "Juan", gender: "Male" },
  { name: "Rodrigo", gender: "Male" },
];

describe("test function gender", () => {
  it("Filter male", () => {
    expect(filterGender(characters, "Male")).toEqual(charactersResult);
  });
});

// describe("anotherExample", () => {
//   it("is a function", () => {
//     expect(typeof anotherExample).toBe("function");
//   });

//   it("returns `anotherExample`", () => {
//     expect(anotherExample()).toBe("OMG");
//   });
// });
