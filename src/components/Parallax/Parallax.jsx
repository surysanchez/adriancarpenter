import './Parallax.scss'
import images from '../../constants/images';

function Parallax({type}) {
  return (
    <div className='parallax' style={{background:type=== "about" 
    ? "linear-gradient(180deg, #111132, #0c0c1d)"
    : "linear-gradient(180deg, #111132, #505064)",
     }}>
      <h1>{type==="services" ? "What I do" : "What I have done"}</h1>
      <div className='mountains'>
      </div>
      <div className='planets'></div>
      <div className='stars'></div>
    </div>
  )
}

export default Parallax