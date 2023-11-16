import { useState } from 'react'
import Overlay from '../overlay/Overlay'
import '../../assets/styles/components/_packagedropdown.scss'

type PackageDropDownProps = {
  selectedPackage: string
  onSelectedPackage: (pack: string) => void
}

const PackageDropDown = ({ selectedPackage, onSelectedPackage }: PackageDropDownProps) => {

  const [open, setOpen] = useState(false)

  const handlePackageSelect = (pack: string) => {
    onSelectedPackage(pack)
    setOpen(false)
  }


  return (
    <>
      <div className='check-in-out-container package' onClick={() => setOpen((prevOpen) => !prevOpen)}>
        <div>Package</div>
        <div>
          <div className='current-choice'>{selectedPackage}</div>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>

      {open && (
        <>
          <Overlay onClick={() => setOpen(false)} />
          <div className='package-dropdown'>
            <ul className='package-choices'>
              <li className={selectedPackage === 'all' ? 'selected' : ''} onClick={() => handlePackageSelect('all')}>All</li>
              <li className={selectedPackage === 'budget' ? 'selected' : ''} onClick={() => handlePackageSelect('budget')}>Budget</li>
              <li className={selectedPackage === 'standard' ? 'selected' : ''} onClick={() => handlePackageSelect('standard')}>Standard</li>
              <li className={selectedPackage === 'deluxe' ? 'selected' : ''} onClick={() => handlePackageSelect('deluxe')}>Deluxe</li>
            </ul>
          </div>
        </>
      )}
    </>
  )
}

export default PackageDropDown