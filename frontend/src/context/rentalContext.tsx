import { ReactNode, useState, useEffect, useContext, createContext } from "react"
import axios from "axios"


type RentalsContextProviderProps = {
  children: ReactNode
}

type RentalsContextType = {
  rentals: Rentals[]
  oneRental: Rentals | null
  loading: boolean
  error: string | null
  setRentals: React.Dispatch<React.SetStateAction<Rentals[]>>
  setOneRental: React.Dispatch<React.SetStateAction<Rentals | null>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  // fetchRentalBySlug: (slug: string) => Promise<Rentals | null>
  fetchRentalBySlug: (slug: string) => Promise<any>
}

const RentalsContext = createContext<RentalsContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useRentalsContext = () => {
  const context = useContext(RentalsContext)
  if (!context) {
    throw new Error('useRentalsContext must be used within a RentalsProvider')
  }
  return context
}

export const RentalsProvider = ({ children }: RentalsContextProviderProps) => {
  const [rentals, setRentals] = useState<Rentals[]>([])
  const [oneRental, setOneRental] = useState<Rentals | null>(null)
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const res = await axios.get('http://localhost:7070/api/rentals/')
        setRentals(res.data)
        setLoading(false)
      } catch (error) {
        setError('Error when fetching rentals')
        setLoading(false)
      }
    }

    fetchRentals()
  }, [])

  const fetchRentalBySlug = async (slug: string) => {
    // setLoading(true)
    try {
      const res = await axios.get(`http://localhost:7070/api/rentals/slug/${slug}`)
      setOneRental(res.data)
    } catch (error) {
      console.log('Error fetching rental by slug');
    }
  }


  const contextValue: RentalsContextType = {
    rentals,
    oneRental,
    loading,
    error,
    setRentals,
    setOneRental,
    setLoading,
    fetchRentalBySlug,
  }

  return (
    <RentalsContext.Provider value={contextValue}>
      {children}
    </RentalsContext.Provider>
  )
}
// const fetchRentalBySlug = async (slug: string): Promise<Rentals | null> => {
//   try {
//     const res = await axios.get(`http://localhost:7070/api/rentals/slug/${slug}`)
//     setLoading(false)
//     return res.data
//   } catch (error) {
//     setError('Error fetching rental')
//     setLoading(false)
//     return null
//   }
// }