import Link from 'next/link'
import Text from './Text'
import Buttons from './Buttons'

const Navbar = () => {
  return (
    <>
      <div className=' models container-fluid '>
        <div className='image models-image'>
          <img
            className=' img-fluid object-fit-cover '
            src='https://tesla-clone-felixivance.vercel.app/images/model-s.jpg'
            alt='models'
          />
        </div>
        <nav className='navbar fixed-top'>
          <div className='container-fluid d-inline-flex align-items-center justify-content-between'>
            <img
              className='mb-3'
              src='https://tesla-clone-felixivance.vercel.app/images/logo.svg'
              alt='TESLA'
            />
            <ul className='nav-ul mt-3 d-none d-md-inline'>
              <li className='nav-li px-1 px-lg-4'>
                <Link href='/models'>Model S</Link>
              </li>
              <li className='nav-li px-1 px-lg-4'>
                <Link href='/model3'>Model 3</Link>
              </li>
              <li className='nav-li px-1 px-lg-4'>
                <Link href='/modelx'>Model X</Link>
              </li>
              <li className='nav-li px-1 px-lg-4'>
                <Link href='/modely'>Model Y</Link>
              </li>
              <li className='nav-li px-1 px-lg-4'>
                <Link href='/cybertruck'>Cybertruck</Link>
              </li>
            </ul>
            <ul className='nav-ul mt-md-3'>
              <li className='nav-li me-2'>
                <Link href='/shop'>Shop</Link>
              </li>
              <li className='nav-li me-2'>
                <Link href='/account'>Tesla Account</Link>
              </li>
              <li className='nav-li me-2 mb-1 '>
                <a
                  data-bs-toggle='offcanvas'
                  href='#offcanvasExample'
                  role='button'
                  aria-controls='offcanvasExample'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-list'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                    />
                  </svg>
                </a>
              </li>
              <div
                className='offcanvas offcanvas-end'
                tabindex='-1'
                id='offcanvasExample'
                aria-labelledby='offcanvasExampleLabel'
              >
                <div className='offcanvas-header'>
                  <h5 className='offcanvas-title' id='offcanvasExampleLabel'>
                    <img
                      src='https://tesla-clone-felixivance.vercel.app/images/logo.svg'
                      alt='TESLA'
                    />
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='offcanvas'
                    aria-label='Close'
                  ></button>
                </div>
                <div className='offcanvas-body'>
                  <div>
                    <li className='offcanva-li'>
                      <Link href='/models'>Model S</Link>
                    </li>
                    <li className='offcanva-li'>
                      <Link href='/model3'>Model 3</Link>
                    </li>
                    <li className='offcanva-li'>
                      <Link href='/modelx'>Model X</Link>
                    </li>
                    <li className='offcanva-li'>
                      <Link href='/modely'>Model Y</Link>
                    </li>
                    <li className='offcanva-li'>
                      <Link href='/cybertruck'>CyberTruck</Link>
                    </li>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </nav>
        <Buttons />
        <Text />
      </div>
    </>
  )
}

export default Navbar
