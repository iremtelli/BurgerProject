import React from "react"
import { Link } from "react-router-dom"
import BannerImage from "../images/banneryeni.jpg"
import "../Style/Home.css"

export const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="order">
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  )
}
