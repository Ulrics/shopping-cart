import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));

  return (
    <>
      <p>Placeholder Test</p>
    </>
  )
}

export default App
