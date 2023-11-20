import { GoDotFill } from "react-icons/go";
import { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";

const Included = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="included-container">
      <h3>Included in the package</h3>
      <div className='border-div'>
        <div onClick={toggleAccordion} className={`included-grid ${isOpen ? 'show' : ''}`}>
          <div>
            <GoDotFill className='icon' />
            <p>Hot tub & sauna</p>
          </div>
          <div>
            <GoDotFill className='icon' />
            <p>Outdoor kitchen</p>
          </div>
          <div>
            <GoDotFill className='icon' />
            <p>Bathrobe & slippers</p>
          </div>
          <div>
            <GoDotFill className='icon' />
            <p>Cleaning service</p>
          </div>
          <div>
            <GoDotFill className='icon' />
            <p>Champagne on arrival</p>
          </div>
          <div>
            <GoDotFill className='icon' />
            <p>Breakfast buffé</p>
          </div>
        </div>
        <div onClick={toggleAccordion} className='expandable'>
          {isOpen ? (
            <>
              <p>Show less</p>
              <FaChevronDown className='chevron up' style={{ color: '#486349' }} />
            </>
          ) : (
            <>
              <p>Show more</p>
              <FaChevronDown className='chevron' style={{ color: '#486349' }} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Included