const hello = require("./hello");
describe("My hello 2", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World");
  });
});
