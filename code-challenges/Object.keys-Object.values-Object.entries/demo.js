let person =
{
  'name': 'John',
  'role': 'Dad',
  'interests': ['Coaching', 'Teaching'],
};

console.log("Person's name: " + person.name);

// for ... in
for (let property in person) {
  console.log('for ... in: ' + property, person[property]);
}

// Object.keys
let properties = Object.keys(person);
properties.forEach(property => {
  console.log('Object.keys for: ' + property, person[property]);
});

Object.keys(person).forEach(property => {
  console.log('Object.keys forEach: ' + property, person[property]);
});

Object.values
console.log('Object.values: ' + Object.values(person));

Object.values(person).forEach(value => {
  console.log('Object.values forEach: ' + 'Object.values: ' + value);
});

// Object.entries
Object.entries(person).forEach(entry => {
  console.log('Object.entries: ' + entry);
});
