import ThreeDimensional from "./ThreeDimentional";

const threeDimentional: ThreeDimensional = new ThreeDimensional(14);

describe("ThreeDimentional Program", () => {
  test("Constant should be equal to 3.14", () => {
    expect(threeDimentional.constant).toBe(3.14);
  });
  test("Diameter should be equal to 14", () => {
    expect(threeDimentional.diameter).toBe(14);
  });
  test("Volume of ThreeDimentional should be 615.44", () => {
    expect(threeDimentional.volume()).toBe(615);
  })
})