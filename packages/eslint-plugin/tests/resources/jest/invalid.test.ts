describe("Invalid tests", () => {
  // consistent-test-it
  it("wrong");
  it.only("wong");

  // expect-expect
  it("should be a test", () => {
    console.log("no assertion");
  });

  // no-disabled-tests
  describe.skip("foo", () => {
    expect(true).toBeTruthy();
  });

  it.skip("foo", () => {
    expect(true).toBeTruthy();
  });
  test.skip("foo", () => {
    expect(true).toBeTruthy();
  });

  // no-export
  module.exports = {
    something: "that should be moved to a non-test file",
  };

  // no-identical-title
  it("should do bar", () => {
    expect(true).toBeTruthy();
  });
  it("should do bar", () => {
    expect(true).toBeTruthy();
  });
});
