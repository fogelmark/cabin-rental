import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './assets/styles/global/index.scss'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Rentals from './pages/Rentals'
import RentalsDetails from './pages/RentalsDetails'
import FilteredRentals from './pages/FilteredRentals'

const App = () => {

  console.log('App renders');

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