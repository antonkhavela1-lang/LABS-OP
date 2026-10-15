const items = [true, 'hello', 5, 12, -200, false, false, 'word', { a: 1 }, null, undefined];

const collection = {};

for (const item of items) {
  const type = typeof item;
  if (!(type in collection)) {
    collection[type] = 0;
  }
  collection[type]++;
}

console.dir(collection);