const tuple1: [number, string, string?] = [1, 'Luiz', 'Otávio'];

console.log(tuple1);

const tuple2: [number, string, ...string[]] = [1, 'Luiz', 'Otávio'];

console.log(tuple2);

const tuple3: readonly [number, string] = [1, 'Luiz'];

console.log(tuple3);

const tuple4: ReadonlyArray<string> = ['Luiz', 'Otávio'];

console.log(tuple4);
