import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './assets/styles/global/index.scss'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Rentals from './pages/Rentals'
import RentalsDetails from './pages/RentalsDetails'
import FilteredRentals from './pages/FilteredRentals'
import PaymentConfirmation from './pages/PaymentConfirmation'
import ConfirmBooking from './pages/ConfirmBooking'

const App = () => {

  // console.log('App renders');

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
          path: 'rentals/:slug',
          element: <PaymentConfirmation />
        },
        // TO DO - ADD ALL OTHER PAGES
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