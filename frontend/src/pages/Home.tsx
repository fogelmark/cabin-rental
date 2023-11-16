import { useState } from "react"
import Calendar from "../components/calendar/Calendar"
import PackageDropDown from "../components/packagedropdown/PackageDropDown"
import { useNavigate } from "react-router-dom"
import '../assets/styles/layouts/_home.scss';
import '../assets/styles/components/_searchwidget.scss'

const Home = () => {
  const navigate = useNavigate()

  const [selectedPackage, setSelectedPackage] = useState('all')

  const handlePackageSelect = (pack: string) => {
    setSelectedPackage(pack)
  }

  const handleSearch = () => {
    navigate(`/rentals/packages/${selectedPackage}`)
  }


  return (
    <div className='header-container'>
      <div className='cabin-search-widget'>
        <PackageDropDown selectedPackage={selectedPackage} onSelectedPackage={handlePackageSelect} />
        <button className='btn btn-widget' onClick={handleSearch}>SEARCH</button>
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
        </div>
        <Calendar />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius saepe modi ipsa rerum harum, atque ipsam, voluptates vel, consequuntur nemo. Recusandae perferendis quos rem eum facere eius itaque assumenda!
        Perspiciatis, dolore? Temporibus provident quibusdam culpa dolorem, repudiandae nisi iste nemo rerum reiciendis soluta voluptates dolor magnam. Quaerat libero natus aut veniam sequi! Excepturi amet non maiores vitae, beatae consequuntur.
        Quae, laudantium a fugit vero aspernatur eveniet ipsum molestiae molestias. Aliquid, doloremque saepe animi at ipsum quas magnam numquam eos inventore velit dignissimos? Facere perferendis ad quae, soluta ipsum saepe!
        Est assumenda ut sapiente illum architecto repellendus culpa eveniet rem cumque voluptate eligendi molestiae sunt, aperiam consectetur eum placeat nobis exercitationem animi odio, ex atque doloribus! Perspiciatis expedita aliquam eveniet?
        Nesciunt, quia id temporibus eum unde nihil provident molestias error voluptatum corporis facilis beatae autem ducimus modi laborum atque! Tempore hic dicta consequuntur iusto nemo. Vitae ex recusandae fuga error.
        Consequuntur explicabo qui, est impedit tempora sit facere consequatur. Ipsum assumenda necessitatibus, magnam repudiandae ratione placeat velit nemo alias, fugit ad pariatur omnis aperiam adipisci excepturi doloremque eligendi aliquam ipsa.
        Debitis impedit adipisci culpa animi dolorem molestias, modi distinctio eveniet provident a quaerat. Totam aliquid id praesentium rerum dolorum, minima nam voluptates expedita nobis dignissimos excepturi voluptatum inventore laborum rem?
        Aut molestias, deleniti natus, incidunt alias iusto ipsa modi nihil, minus quae dicta itaque. Quia ducimus, enim recusandae ipsam similique ratione accusamus neque! Ab nesciunt impedit adipisci suscipit repellendus. Nihil!
        Porro necessitatibus possimus nobis maxime eum nam esse illum similique modi, itaque numquam distinctio nihil labore. Culpa rem enim dolore animi reprehenderit. Voluptatum sapiente repellat fuga at facere perspiciatis maiores.
        Doloribus enim atque porro. Voluptatum, doloribus fuga! Ab natus in nemo nobis voluptatem dolore est animi. Quo libero neque ducimus, voluptatem nihil, adipisci fugiat iure eius sapiente accusantium rem alias?</p>
    </div>
  )
}

export default Home