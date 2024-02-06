import './Navbar.scss'
import {motion} from "framer-motion"
import {
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
import Sidebar from '../Sidebar/Sidebar';

function Navbar() {
  return (
    <div className='navbar'>
{/* Sidebar */}
<Sidebar/>
<div className="wrapper">
    <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:1}}>Adrian Abreu Garcia</motion.span>
    <div className='social'>
        <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href="" target="_blank"
            rel="noopener noreferrer"
            alt="ig"
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            href="" target="_blank"
            rel="noopener noreferrer"
            alt="facebook"
            role='button'
          >
            <MDBIcon fab icon='facebook' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#000000' }}
            href=""
            rel="noopener noreferrer"
            alt="tiktok"
            role='button'
          >
            <MDBIcon fab icon='tiktok' />
          </MDBBtn>
    </div>
</div>
    </div>
  )
}

export default Navbar