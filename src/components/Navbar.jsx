import React from 'react'
import Logo from '../assets/icons/logo.jpg'
import { CartWidget } from './CartWidget'
import { Link, NavLink, useLocation } from 'react-router-dom'
import categories  from '../data/categorias.json'


export const NavBar = (props) => {
  const location = useLocation();  
  return (
    <><header>
      <Link to="/"> <img src={Logo} alt='logo' /> </Link>
          <nav className='Nav'>
              <ul className='menu' >
                  <li className='menu-items' > <Link to="/Productos" className="nav-link" activeclassname="active" >Productos</Link>
                  </li>
                  {
                    categories.map((category) => {
                    return (
                      <li className='menu-items' key={category.id}> 
                  <NavLink to={`/category/${category.id}`} activeclassname="active" className={"nav-link"}>{category.nombre}
                  </NavLink>
                  </li>
                    )
                    })
                  }
              </ul>
          </nav>
          <CartWidget Cart={props.Cart}/>
      </header>  
      </>
  )
}