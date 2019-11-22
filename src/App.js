import React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'
import NavBar from './NavBar'
import Details from './Details'
import SearchParams from './SearchParams'
import { Provider } from 'react-redux'
import store from './store'

// your code is going to go here
const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div>
          <NavBar />

          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id"></Details>
          </Router>
        </div>
      </Provider>
    </React.StrictMode>
  )
}

render(<App />, document.getElementById('root'))
