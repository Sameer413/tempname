import React, { useEffect } from 'react'
import './App.css'
import Main from './pages/Main'
import { useSelector } from 'react-redux'


function App() {
  const { isAuthenticated } = useSelector(state => state.user);

  // useEffect(() => {

  // }, [])


  return (
    <>
      <Main isAuthenticated={isAuthenticated} />
    </>
  )
}

export default App
