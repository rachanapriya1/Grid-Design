import { useState } from "react"
import Filter from "./Components/Filter"
import Cards from './Components/Cards' 
import Navbar from "./Components/Navbar"

export default function App() {

  const [color,setColor] = useState("beige")
  return (
   <>
   <Navbar/>
   <Filter/>
   <Cards/>
   </>
  )
}
