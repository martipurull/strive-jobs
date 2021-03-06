import Home from "./components/Home";
import Company from './components/Company'
import SJFooter from "./components/SJFooter";
import SJNavbar from "./components/SJNavbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Favourites from "./components/Favourites";

function App() {
  const [company, setCompany] = useState()

  return (
    <BrowserRouter>

      <SJNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:company' element={<Company />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
      <SJFooter />
    </BrowserRouter>
  );
}

export default App;
