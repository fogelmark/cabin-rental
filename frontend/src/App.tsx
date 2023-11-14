import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './assets/styles/base/main.scss'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Rentals from './pages/Rentals'
import RentalsDetails from './pages/RentalsDetails'
import FilteredRentals from './pages/FilteredRentals'
import PaymentConfirmation from './pages/PaymentConfirmation'
import ConfirmBooking from './pages/ConfirmBooking'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'rentals',
          element: <Rentals />
        },
        {
          path: 'rentals/packages/:pack',
          element: <FilteredRentals />
        },
        {
          path: 'rentals/:slug',
          element: <RentalsDetails />
        },
        {
          path: 'confirm-booking/:slug',
          element: <ConfirmBooking />
        },
        {
          path: 'payment-confirmation/:id',
          element: <PaymentConfirmation />
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App