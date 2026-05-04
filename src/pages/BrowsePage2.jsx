import React from 'react'
import BrowsePage from './BrowsePage'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'

const BrowsePage2 = () => {
  return (
   <div className="flex min-h-screen bg-[#101419]">
   
   
         <Sidebar/>
   
   
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

export default BrowsePage2