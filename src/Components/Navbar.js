import React from "react"
import burger from "../images/burger.png"
import { Link } from "react-router-dom"
import "../Style/Navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={burger} width={100} height={100} />
        <div className="mainLink">
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>
    </div>
  )
}
