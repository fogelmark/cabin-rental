import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RentalsProvider } from './context/rentalContext.tsx'
import { BookingsProvider } from './context/bookingContext.tsx'
import { ReservationProvider } from './context/reservationContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BookingsProvider>
      <RentalsProvider>
        <ReservationProvider>
          <App />
        </ReservationProvider>
      </RentalsProvider>
    </BookingsProvider>
  </React.StrictMode>,
)
