// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("success")
  },4000)
})

// #2) Run the above promise and make it console.log "success"
promise.then((msg) => console.log(msg))

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const resolve = Promise.resolve("success").then((val) => console.log(val))


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(console.log('Ooops~~'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapii.com/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map((url) =>
  fetch(url).then(resp => resp.json())
))
.then(result => {
  result.map((res) => console.log(res))
})
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
Promise.all(urls.map((url) =>
  fetch(url).then(resp => resp.json())
))
.then(result => {
  result.map((res) => console.log(res))
  throw new Error('Fail')
})
.catch(err => console.error(err))
