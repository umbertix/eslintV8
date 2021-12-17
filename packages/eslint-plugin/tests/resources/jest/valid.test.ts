describe("a test", () => {
  // consistent-test-it:
  it.todo("testing");

  // expect-expect
  it("should be a test", () => {
    expect(true).toBeDefined();
  });

  const myThing = {
    something: "that can live here",
  };

  it("should contain expects", () => {
    expect(myThing).toBeDefined();
  });
});
