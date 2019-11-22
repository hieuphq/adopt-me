import React, { useState } from 'react'
import { render } from 'react-dom'
import { Router, Link } from '@reach/router'
import ThemeContext from './ThemeContext'
import NavBar from './NavBar'
import Details from './Details'
import SearchParams from './SearchParams'

// your code is going to go here
const App = () => {
  const themeHook = useState('peru')
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />

          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id"></Details>
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  )
}

render(<App />, document.getElementById('root'))
