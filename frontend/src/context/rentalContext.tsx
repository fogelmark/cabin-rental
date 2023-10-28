import { ReactNode, useState, useEffect, useContext, createContext } from "react"
import axios from "axios"


type RentalsContextProviderProps = {
  children: ReactNode
}

type RentalsContextType = {
  rentals: Bookings[]
  loading: boolean
  error: string | null
  setRentals: React.Dispatch<React.SetStateAction<Bookings[]>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const RentalsContext = createContext<RentalsContextType | undefined>(undefined)

export const useRentalsContext = () => {
  const context = useContext(RentalsContext)
  if (!context) {
    throw new Error('useRentalsContext must be used within a RentalsProvider')
  }
  return context
}

export const RentalsProvider = ({ children }: RentalsContextProviderProps) => {
  const [rentals, setRentals] = useState<Bookings[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const response = await axios.get('http://localhost:7070/api/rentals/')
        setRentals(response.data)
        setLoading(false)
        // console.log(response.data);
      } catch (error) {
        setError('Error when fetching rentals')
        setLoading(false)
      }
    }
    fetchRentals()
  }, [])

  const contextValue: RentalsContextType = {
    rentals,
    loading,
    error,
    setRentals,
    setLoading
  }

  return (
    <RentalsContext.Provider value={contextValue}>
      {children}
    </RentalsContext.Provider>
  )
}