function* geradora() {
  yield function() {
    console.log("Vim do yield 1");
  }

  return function() {
    console.log("Vim do return");
  }

  // yield function() {
  //   console.log("Vim do yield 2");
  // }
}

const g = geradora();

const func1 = g.next().value;
const func2 = g.next().value;

func1();
func2();