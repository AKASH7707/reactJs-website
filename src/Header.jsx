import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='container-fluid bg-dark p-3'>
        
        <nav className='nav container justify-content-evenly gap-5 nav-pills'>
            <Link to={'/'}><img id='logoImg' src="./public/logo.png" alt="" /></Link>
            <Link className='nav-link active' to={'/'}>Home</Link>
            <Link className='nav-link link-light' to={'/history'}>History</Link>
            <Link className='nav-link link-light' to={'/jsx'}>JSX</Link>
            <Link className='nav-link link-light' to={'/components'}>Components</Link>
        </nav>
    </header>
  )
}
    
export default Header