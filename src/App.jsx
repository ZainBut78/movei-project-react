import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Nav from './components/Nav'

import MovieCard from './components/MovieCard'
import MovieGrid from './components/MovieGrid'
import MovieFilters from './components/MovieFilters'
 
import BrowsePage from './pages/BrowsePage'
import BrowsePage2 from './pages/BrowsePage2'
import MovieDetailPage from './pages/MovieDetailPage'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [qF, setqF] = useState("all")

  return (
    // <BrowsePage2/>
    <BrowserRouter>
      <MovieDetailPage />
    </BrowserRouter>
  )
}

export default App