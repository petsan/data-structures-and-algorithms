

const student = {
  name: 'Peter',
  hair: 'brown',
  height: 72,
  shoeSize: 12.5
}

const students = [
{
  name: 'Peter',
  hair: 'brown',
  height: 72,
  shoeSize: 10.5
},
{
  name: 'Andrew',
  hair: 'brown',
  height: '70',
  shoeSize: 10.5
},
{
  name: 'Sarah',
  hair: 'brown',
  height: 63,
  shoeSize: 8.5
}]
// Objects
Object.keys(student);
Object.values(student);
Object.keys(student);
Object.entries(student);

// Array of Objects
Object.keys(students);
Object.values(students);
Object.keys(students);
Object.entries(students);
// console.log(students);

let names = [];

students.forEach(student => {
  names.push(student.name);
})

console.log(names);
