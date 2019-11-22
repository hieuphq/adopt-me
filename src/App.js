import React, { useState, lazy, Suspense } from 'react'
import { render } from 'react-dom'
import SearchParams from './SearchParams'
import { Router, Link } from '@reach/router'
import ThemeContext from './ThemeContext'
import NavBar from './NavBar'

const Details = lazy(() => import('./Details'))

// your code is going to go here
const App = () => {
  const themeHook = useState('peru')
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />

          <Suspense fallback={<h1>loading route...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id"></Details>
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  )
}

render(<App />, document.getElementById('root'))
