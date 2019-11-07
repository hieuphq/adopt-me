import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

// your code is going to go here
const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, { name: 'Lulu', animal: 'Dog', breed: 'Kiki' }),

    React.createElement(Pet, {
      name: 'Penten',
      animal: 'Bird',
      breed: 'Cockatiel',
    }),
    React.createElement(Pet, { name: 'Meomeo', animal: 'Cat', breed: 'Mixed' }),
  ])
}

render(React.createElement(App), document.getElementById('root'))
