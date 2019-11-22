import React, { useState, useEffect } from 'react'
import pet, { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown'
import Results from './Results'
import { connect } from 'react-redux'
import changeLocation from './actionCreators/changeLocation'
import changeTheme from './actionCreators/changeTheme'

const SearchParams = props => {
  // const [location, setLocation] = useState('Seattle, WA')
  const [breeds, setBreeds] = useState([])
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS)
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds)
  const [pets, setPets] = useState([])
  // const [theme, setTheme] = useContext(ThemeContext)

  async function requestPets() {
    const { animals } = await pet.animals({
      location: props.location,
      breed,
      type: animal,
    })

    setPets(animals || [])
  }

  useEffect(() => {
    setBreeds([])
    setBreed('')

    pet.breeds(animal).then(
      ({ breeds: breedApi }) => {
        const breedStrings = breedApi.map(breedObj => breedObj.name)
        setBreeds(breedStrings)
      },
      error => console.error(error),
    )
  }, [animal, setBreed, setBreeds])

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
          requestPets()
        }}
      >
        <label htmlFor="location">
          location
          <input
            id="location"
            value={props.location}
            placeholder="Location"
            onChange={e => props.updateLocation(e.target.value)}
          ></input>
          <AnimalDropdown />
          <BreedDropdown />
          <label htmlFor="theme">
            Theme
            <select
              value={props.theme}
              onChange={e => props.setTheme(e.target.value)}
              onBlur={e => props.setTheme(e.target.value)}
            >
              <option value="peru">Peru</option>
              <option value="darkblue">Dark Blue</option>
              <option value="mediumorchid">Medium orchid</option>
              <option value="chartreuse">Chartreuse</option>
            </select>
          </label>
          <button style={{ backgroundColor: props.theme }}>Submit</button>
        </label>
      </form>
      <Results pets={pets} />
    </div>
  )
}

const mapStateToProps = ({ theme, location }) => ({
  theme,
  location,
})

const mapDispatchToProps = dispatch => ({
  setTheme: theme => dispatch(changeTheme(theme)),
  updateLocation: location => dispatch(changeLocation(location)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchParams)
