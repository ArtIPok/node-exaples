const fs = require('fs');

genders = ["M", "F"];

maleNames = ["Piotr", "Robert", "Artur", "Jan", "Maciej", "Tomasz", "Igor", "Paweł", "Staś", "Grześ", "Wojtek"];

femaleNames = ["Zosia", "Ewa", "Jadzia", "Zuzia", "Tosia", "Gosia", "Ola", "Dororta", "Ewelina", "Jula", "Aga"];

lastNames = ["Kowlalski", "Nowak", "Szydło", "Norek", "Paździoch", "Grot", "Wąs", "Mask", "Polk"];

age = ["18", "20", "21", "23", "26", "32", "34", "40", "45", "53", "55", "60", "63", "70", "78"];

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

people = []

for(let i = 1; i<= 20; i++) {
  const person = {
    gender:'',
    firstName: '',
    lastName: '',
    age: '',
  }

  person.gender = randChoice(genders)

  if(person.gender === "M") {
    person.firstName = randChoice(maleNames);
  } else if(person.gender === "F") {
    person.firstName = randChoice(femaleNames);
  } else null
  
  person.lastName = randChoice(lastNames);
  person.age = randChoice(age);

  people.push(person)
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json file has been saved!');
});