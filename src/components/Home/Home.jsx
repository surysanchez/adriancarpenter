import './Home.scss'
import {motion} from "framer-motion"
import images from '../../constants/images';

function Home() {
  return (
  <div className='home'> 
  <div className='imageContainer'>
    <img src={images.carpenterhome} alt="" />
  </div>
  </div>
       
  )
}

export default Home