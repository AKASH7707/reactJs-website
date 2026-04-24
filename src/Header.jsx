import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='container-fluid bg-dark p-3'>
        <nav className='nav justify-content-center gap-5 nav-pills'>
            <Link className='nav-link active' to={'/'}>Home</Link>
            <Link className='nav-link' to={'/history'}>History</Link>
            <Link className='nav-link' to={'/jsx'}>JSX</Link>
            <Link className='nav-link' to={'/components'}>Components</Link>
        </nav>
    </header>
  )
}
    
export default Header