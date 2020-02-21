// For await of
const urls = [
  'https://jsonplaceholder.typicode.com/users'
  ,'https://jsonplaceholder.typicode.com/posts'
  ,'https://jsonplaceholder.typicode.com/albums'
]

const loopThroughtUrl = urls => {
  for (url of urls) {
    console.log(url)
  }
}

// Previous version
//
const getData = async () => {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)

  } catch (err) {
    console.log('Errrr', err)
  }
}

// ES9
const getData2 = async () => {
  const arrPromise = urls.map(url => fetch(url))
  for await (let req of arrPromise) {
    const data = await req.json()
    console.log(data)
  }
}
