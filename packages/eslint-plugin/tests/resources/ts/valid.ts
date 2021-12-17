function doSomethingElse(): number {
  return 1;
}

function doSomething(): string {
  return "t";
}

const a = true;
if (a) {
  doSomething();
  doSomethingElse();
} else {
  throw new Error("Test");
}

async function foo(): Promise<void> {
  return bar();
}

async function bar(): Promise<void> {
  return Promise.resolve();
}

function doSomethingInconsistent(condition): boolean {
  if (condition) {
    return true;
  }
  return false;
}

const arrowFunction = (): string => "test";

class Test {
  method(): void {
    throw new TypeError("unicorn");
  }

  method2(): boolean {
    return [].includes("foo");
  }
}

new Test().method();
new Test().method2();

class Employee {
  empCode: number;

  constructor(name: string, code: number) {
    this.empCode = code;
  }

  find(name: string): Employee {
    return new Employee(name, 1);
  }
}
