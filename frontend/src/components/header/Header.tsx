import Calendar from '../calendar/Calendar'
import './Header.scss'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='cabin-search-container'>
        <Calendar />
        <div className='package-container'>
          <div className='check-in-out-container'>
            <div>Package</div>
            <div>All</div>
          </div>
        </div>
        <button>Search</button>
      </div>
    </div>
  )
}

export default Header