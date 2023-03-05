const hello = require("./hello");
describe("My hello again", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World");
  });
});
