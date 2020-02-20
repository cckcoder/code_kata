fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(console.log)

// Async Await
async function fetchUser() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await resp.json()
  console.log(data)
}
