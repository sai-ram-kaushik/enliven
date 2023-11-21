import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"
import Psychologists from "./pages/Psychologists"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/psychologists" element={<Psychologists/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
