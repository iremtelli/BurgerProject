import React from "react"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import "../Style/Footer.css"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.facebook.com/" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/login?lang=tr">
          <TwitterIcon />{" "}
        </a>
      </div>
      <p>Tüm hakları saklıdır | BurgerYiyelim</p>
    </div>
  )
}
