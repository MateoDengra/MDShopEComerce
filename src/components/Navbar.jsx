import React from 'react'
import Logo from '../assets/icons/logo.jpg'
import { CartWidget } from './CartWidget'
export const NavBar = () => {
  return (
    <><header>
          <img src={Logo} alt='logo' />
          <nav>
              <ul className='menu'>
                  <li className='menu-items'><a href="#">Inicio</a></li>
                  <li className='menu-items'><a href="#">Prendas superiores</a></li>
                  <li className='menu-items'><a href="#">Prendas inferiores</a></li>
                  <li className='menu-items'><a href="#">Accesorios</a></li>
                  <li className='menu-items'><a href="#">Calzados</a></li>
              </ul>
          </nav>
          <CartWidget />
      </header>  
      </>
  )
}