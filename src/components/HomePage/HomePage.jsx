import './HomePage.scss'

import images from '../../constants/images';

  import { LuArrowDownNarrowWide } from "react-icons/lu";

function HomePage() {
  return (
    <div className='home'>
        <div className="wrapper">
        <div className="textContainer">
        <h4>Hola, I'm Adrian</h4>
            <h2>I'm a skilled and experienced Carpenter</h2>
            <div className="buttons">
                <button>Check my latest work</button>
                <button>Contact Me</button>
            </div>
            <LuArrowDownNarrowWide size={20} />
        </div>
    </div>  
       <div className="imageContainer">
        <img src={images.carpenterhome} alt="" />
       </div>
    </div>
  )
}

export default HomePage