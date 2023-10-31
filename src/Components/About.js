import React from "react"
import BannerImage from "../images/banneryeni.jpg"
import "../Style/About.css"

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          In sit amet sapien at dui sollicitudin ultricies. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Suspendisse ut semper enim, id iaculis orci. Duis mi sapien, lobortis
          et risus aliquet, aliquam porttitor ante. Fusce tincidunt nisl velit,
          sed condimentum mi dignissim vel. Praesent ut dolor sit amet nisi
          vulputate egestas vel sed justo. Aenean vulputate magna sed enim
          eleifend ornare. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Aliquam dictum mauris vitae mi
          blandit, id lacinia justo feugiat. Donec quis lorem nec nulla gravida
          rhoncus ut sit amet lectus. Donec ullamcorper, ex et rhoncus
          efficitur, libero sapien aliquam quam, non rhoncus enim nisi id quam.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Nam aliquam velit ligula, quis tristique nisl
          imperdiet id. Vivamus vestibulum lacinia risus sed tincidunt. Nulla
          hendrerit odio arcu, ac egestas ligula sollicitudin at. In lobortis
          massa in risus feugiat rutrum.
        </p>
      </div>
    </div>
  )
}

export default About
