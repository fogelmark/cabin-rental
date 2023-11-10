import { ReactNode, useState, useContext, createContext } from "react"
import axios from "axios"


type BookingContextProviderProps = {
  children: ReactNode
}

type BookingsContextType = {
  bookings: Bookings | null
  loading: boolean
  error: string | null
  setBookings: React.Dispatch<React.SetStateAction<Bookings | null>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  fetchBookingById: (_id: string) => Promise<void>
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
  const [bookings, setBookings] = useState<Bookings | null>(null)
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBookingById = async (_id: string) => {
    try {
      const response = await axios.get(`http://localhost:7070/api/bookings/${_id}`)
      setBookings(response.data)
      setLoading(false)
    } catch (error) {
      setError('Error when fetching booking')
      setLoading(false)
    }
  }

  const contextValue: BookingsContextType = {
    bookings: bookings,
    loading,
    error,
    setBookings,
    setLoading,
    fetchBookingById
  }

  return (
    <BookingsContext.Provider value={contextValue}>
      {children}
    </BookingsContext.Provider>
  )
}