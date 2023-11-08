import { ReactNode, useState, useEffect, useContext, createContext } from "react"
import axios from "axios"


type BookingContextProviderProps = {
  children: ReactNode
}

type BookingsContextType = {
  bookings: Bookings[]
  loading: boolean
  error: string | null
  setBookings: React.Dispatch<React.SetStateAction<Bookings[]>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const BookingsContext = createContext<BookingsContextType | undefined>(undefined)

export const useBookingsContext = () => {
  const context = useContext(BookingsContext)
  if (!context) {
    throw new Error('useBookingsContext must be used within a BookingsProvider')
  }
  return context
}

export const BookingsProvider = ({ children }: BookingContextProviderProps) => {
  const [bookings, setBookings] = useState<Bookings[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:7070/api/bookings/')
        setBookings(response.data)
        setLoading(false)
      } catch (error) {
        setError('Error when fetching bookings')
        setLoading(false)
      }
    }
    fetchBookings()
  }, [])

  const contextValue: BookingsContextType = {
    bookings: bookings,
    loading,
    error,
    setBookings,
    setLoading
  }

  return (
    <BookingsContext.Provider value={contextValue}>
      {children}
    </BookingsContext.Provider>
  )
}