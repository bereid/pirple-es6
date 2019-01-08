// Socrates is a man, Socrates is mortal

// Let everybody be
const everybody = [
  {
    name: 'Justin Timberlake',
    sex: 'man'
  },
  {
    name: 'Socrates',
    sex: 'man'
  },
  {
    name: 'Richard Gere',
    sex: 'man'
  },
  {
    name: 'Lady Gaga',
    sex: 'woman'
  },
  {
    name: 'Tom Denem',
    sex: 'man'
  },
  {
    name: 'Barbara Palvin',
    sex: 'woman'
  },
  {
    name: 'Hulk',
    sex: 'man'
  },
];

const mortals = [];

// Make every man mortal
everybody.forEach((person) => { person.sex === 'man' ? mortals.push(person) : '' });

// Check if Socrates is one of the mortals
mortals.forEach((mortal) => { mortal.name === 'Socrates' ? console.log(`${mortal.name} is mortal.`) : '' });

// The cake issue

// Bake the two cakes
const myCakes = {
  chocolateCake: {
    name: 'My best cake',
    ingredient: 'chocolate'
  },
  vanillaCake: {
    name: 'My mothers best cake',
    ingredient: 'vanilla'
  },
};

// Check if the vanilla cake's secret ingredient is chocolate or something else
if (myCakes.vanillaCake.ingredient === 'chocolate') {
  console.log(`My mother's best vanilla cake's secret ingredient is ${myCakes.chocolateCake.ingredient}`)
} else if (myCakes.vanillaCake.ingredient === 'vanilla') {
  console.log(`My mother's best vanilla cake's secret ingredient is ${myCakes.chocolateCake.ingredient}`)
}