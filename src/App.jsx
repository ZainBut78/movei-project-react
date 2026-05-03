import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Nav from './components/Nav'

import MovieCard from './components/MovieCard'
import MovieGrid from './components/MovieGrid'
import MovieFilters from './components/MovieFilters'
 
import BrowsePage from './pages/BrowsePage'

function App() {
  const [qF, setqF] = useState("all")

  return (
    <div className="flex min-h-screen bg-[#101419]">


      <Sidebar />


      <div className="flex-1 flex flex-col">


        <Nav />


        <main className="p-8 overflow-y-auto">
          <h2 className="ml-10 text-white text-2xl font-semibold">Browse Results</h2>
          <BrowsePage/>
        </main>

      </div>
    </div>
  )
}

export default App