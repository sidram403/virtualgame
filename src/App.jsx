import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Instructions from './pages/Instructions'
import Counting from './pages/Counting'
import OtherPage from './pages/OtherPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/instruction' element={<Instructions />} />
  <Route path='/counting' element={<Counting />} />
  <Route path='/other' element={<OtherPage />} />

</Routes>
</BrowserRouter>
     
    
  )
}

export default App
