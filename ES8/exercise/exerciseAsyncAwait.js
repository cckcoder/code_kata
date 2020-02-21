// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

// Type1
const fetchStarship = async () => {
  const resulte = await fetch('https://swapi.co/api/starships/9/')
    .then(resp => resp.json())

  console.log(resulte)
}

// Type2
async function fetchStarship() {
  const response = await fetch('https://swapi.co/api/starships/9/')
  const data = await response.json()
  console.log(data)
}

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

// Answer1
const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url => fetch(url)));
  console.log('users', await users.json());
  console.log('posta', await posts.json());
  console.log('albums', await albums.json());
}

const getData = async () => {
  const [ users, posts, albums ] = await Promise.all(urls.map(
    async (url) => {
      const resp = await fetch(url)
      return resp.json()
    }
  ))

  console.log('users', users)
  console.log('posts', posts)
  console.log('albums', albums)
}

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholdeTYPO.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url => fetch(url)));
    console.log('users', await users.json());
    console.log('posta', await posts.json());
    console.log('albums', await albums.json());
  } catch (err) {
    console.error('oooooops', err)
  }

}
