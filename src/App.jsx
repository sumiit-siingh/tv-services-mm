import { useState } from 'react'
import Service from './pages/service'
import Layout from './layout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Service/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
