import React from 'react'

const App = () => {
  // const name = "Prince";
  const x = 10;
  const y = 20;
  const names = ["prince","noah", "junior"];
  const loggedIn = false;

  return (
    <div>
      <div className = "text-5xl">App This</div>
      <p style={{color : 'red'}}>Hello {name}</p>
      <p>The sum of {x} and {y} is {x + y}.</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      { loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
    </div>
    
  )
}

export default App


