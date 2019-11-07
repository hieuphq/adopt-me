import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'
import SearchParams from './SearchParams'

// your code is going to go here
const App = () => {
  return (
    <div>
      <div></div>
      <h1 id="something-important">Adopt me!</h1>
      <SearchParams />
    </div>
  )
}

render(<App />, document.getElementById('root'))
