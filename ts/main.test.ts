import a from "./main";

test("a", () => {
  expect(a()).toEqual(2);
  expect(a()).toEqual(3);
});
