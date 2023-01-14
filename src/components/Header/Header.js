import React from "react"
import logo from "../../images/logo.svg"
import iconMenuOpen from "../../images/icon-menu.svg"
import iconMenuClose from "../../images/icon-menu-close.svg"
import "./header.css"
import { useGlobalContext } from "../../context"

const Header = () => {
  const { navIsOpen, openNav, closeNav } = useGlobalContext()

  // console.log(navIsOpen)

  return (
    <header>
      <img src={logo} alt='LOGO' className='logo' />
      <nav>
        <div className={`overlay ${navIsOpen && "show-overlay"}`}></div>
        <article className={`nav-items ${navIsOpen && "show-menu-items"}`}>
          <img
            src={iconMenuClose}
            alt='Icon'
            className='close-menu-icon'
            onClick={closeNav}
          />

          <span>home</span>
          <span>new</span>
          <span>popular</span>
          <span>trending</span>
          <span>categories</span>
        </article>
        <img
          src={iconMenuOpen}
          alt='Icon'
          className='open-menu-icon'
          onClick={openNav}
        />
      </nav>
    </header>
  )
}

export default Header
