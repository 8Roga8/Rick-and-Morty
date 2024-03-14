import { useEffect, useState } from 'react'
import './App.css'
import useFecth from './hooks/useFecth'
import getRandomNumber from './tools/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentsCard from './components/ResidentsCard'
import FormSearch from './components/FormSearch'
import HasError from './components/HasError'

function App() {

  const randomLocation = getRandomNumber(126)
  const [inputLocation, setInputLocation] = useState(randomLocation)
  const url = `https://rickandmortyapi.com/api/location/${inputLocation || getRandomNumber(126)}`

  const [location, getLocation, hasError] = useFecth(url)

  useEffect (() => {
    getLocation() 
  }, [inputLocation])

 
  return (
    <div className='app'>
      <h1 className='app_title'></h1>
      <FormSearch
        setInputLocation={setInputLocation}
      />
      {
        hasError
        ? 
        <HasError/>
        : 
        (
          <>
            <LocationInfo
              location={location}/>
            <div className='app_residents'>
              {
                location?.residents.map( urlResidents => (
                <ResidentsCard 
                  key={urlResidents}
                  urlResidents={urlResidents}
            />
              ))}
            </div>
          </> 
        )}
    </div>
  )
}

export default App
