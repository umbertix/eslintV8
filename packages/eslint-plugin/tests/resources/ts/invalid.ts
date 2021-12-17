const a = true;

// inconsistent return type
function doSomethingElse(): string {
  return 1;
}

// use of any
function doSomething(): any {
  return "t";
}

// negated condition
if (!a) {
  // unused const
  const t;
  doSomething();
} else {
  doSomething();
  throw new Error("df");
}

// no return await
async function foo() {
  return await bar();
}

// inconsistent return
function doSomethingInconsistent(condition) {
  if (condition) {
    return true;
  }
  return;
}

// Should indicate that a string is returned
const arrowFunction = () => "test";

class Test {
  // Should indicate that no value is returned (void)
  method() {
    // throw-new-error
    throw new TypeError("unicorn");
    return;
  }

  method2() {
    return [].indexOf('foo') !== -1;
  }
}

// no-identical-functions
function randomthings() {
  return [].indexOf('foo') !== -1;
}

const myMap = new Map();
myMap.set("key", 1);
myMap.set("key", 2); // Noncompliant - value for key "key" is replaced

// undescriptive variable name
const tmp = 0;

// no-small-switch
switch (tmp) {
  case 0:
    doSomething();
    break;
  default:
    doSomethingElse();
    break;
}
