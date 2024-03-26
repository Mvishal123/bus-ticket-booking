import { createContext, useContext } from "react"
import { BusDetails } from "../types"

interface BusContextType {
    busDetails: BusDetails[], 
    
} 

const BusState = () => {
  return (
    <div>BusState</div>
  )
}

export default BusState 