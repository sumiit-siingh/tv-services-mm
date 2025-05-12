import { useState } from 'react'
import Service from './pages/service'
import Layout from './layout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Contact from './pages/contact';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Service/>}/>
        {/* <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Service/>}/> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
