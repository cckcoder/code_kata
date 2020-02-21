// Object spread operator
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 10
}

const { tiger, ...rest } = animals

const arr = [1, 2, 3, 4, 5]
function sum(a, b, c, d, e) {
  return a + b + c + d + e
}

function objectSpread(p1, p2, p3) {
  console.log(p1)
  console.log(p2)
  console.log(p3)
}

const { tiger, lion, ...rest } = animals;
objectSpread(tiger, lion, rest)

// Finally
const urls = [
  'https://swapi.co/api/people/1'
  ,'https://swapi.co/api/people/2'
  ,'https://swapi.co/api/people/3'
  ,'https://swapi.co/api/people/4'
]

Promise.all(urls.map((url) =>
  fetch(url).then(people => people.json())
)).then(arr => {
  throw Error
  console.log(arr[0])
  console.log(arr[1])
  console.log(arr[2])
  console.log(arr[3])
})
.catch(err => console.log('Ughhh fix it', err))
.finally(() => console.log('extra'))

