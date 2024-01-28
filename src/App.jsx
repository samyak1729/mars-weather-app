import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherDisplay from "./WeatherDisplay";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Mars Weather App</h1>
      </header>
      <main>
        <WeatherDisplay />
      </main>
    </div>
  )
}

export default App
