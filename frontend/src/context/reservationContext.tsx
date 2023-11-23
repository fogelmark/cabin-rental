import { ReactNode, useState, useEffect, useContext, createContext } from "react"



type ReservationContextProviderProps = {
  children: ReactNode
}

type ReservationContextType = {
  LOCAL_STORAGE_KEY: string
  reservation: Reservation | null,
  setReservation: React.Dispatch<React.SetStateAction<Reservation | null>>
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined)

export const useReservationContext = () => {
  const context = useContext(ReservationContext)
  if (!context) {
    throw new Error('useReservationContext must be used within a ReservationProvider')
  }
  return context
}

export const ReservationProvider = ({ children }: ReservationContextProviderProps) => {

  const LOCAL_STORAGE_KEY = 'RESERVATION'

  const [reservation, setReservation] = useState<Reservation | null>(null)

  useEffect(() => {
    const reservationData = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (reservationData) {
      const parsedReservation = JSON.parse(reservationData)
      setReservation(parsedReservation)
    }
  }, [])

  const contextValue: ReservationContextType = {
    LOCAL_STORAGE_KEY,
    reservation,
    setReservation
  }

  return (
    <ReservationContext.Provider value={contextValue}>
      {children}
    </ReservationContext.Provider>
  )
}