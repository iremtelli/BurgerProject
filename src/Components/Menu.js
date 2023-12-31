import React from "react"
import { data } from "../Helpers/Data"
import MenuItem from "../Components/MenuItem"
import "../Style/Menu.css"

export const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz </h1>
      <div className="menuList">
        {data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem?.image}
              name={menuItem?.name}
              content={menuItem?.content}
              price={menuItem?.price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Menu
