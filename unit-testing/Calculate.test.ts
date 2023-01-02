import Calculate from "./Calculate";

let calculate: Calculate = new Calculate(5, 2);

describe("Calculate program", () => {
  test("fparam should be equal to 5", () => {
    expect(calculate.fparam).toBe(5);
  });
  test("sparam should be equal to 2", () => {
    expect(calculate.sparam).toBe(2);
  });
  test("Addition of 5 + 2 should be equal to 7", () => {
    expect(calculate.addition()).toBe(7);
  });
});