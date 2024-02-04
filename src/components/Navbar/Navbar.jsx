import './Navbar.scss'
import {
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Navbar() {
  return (
    <div className='navbar'>
{/* Sidebar */}
<div className="wrapper">
    <div>
    <span>Adrian Abreu Garcia</span>
    </div>
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