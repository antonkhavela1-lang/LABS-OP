const items = [true, 'hello', 5, 12, -200, false, false, 'word', 'kpi', 42, true, 52, 'gitgit'];

const collection = {
  number: 0,
  string: 0,
  boolean: 0,
};

for (const item of items) {
  const type = typeof item;
  collection[type]++;
}

console.dir(collection);