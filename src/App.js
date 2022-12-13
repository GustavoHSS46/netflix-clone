import React from 'react'
import './App.css'

import { Navbar, Principal, Content, Footer } from './containers'


const App = () => {
  return (
    <div>
      <Navbar />
      <Principal/>
      <Content />
      <Footer />
    </div>
  )
}

export default App