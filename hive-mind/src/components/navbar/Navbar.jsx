import "./navbar.scss"
import { Link } from "react-router-dom"

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
const Navbar = () => {

  const {toggle, darkMode} = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="left">
      <Link to="/">
        <span>HiveMind</span>
      </Link>
        <HomeOutlinedIcon/>
        {darkMode ? <WbSunnyOutlinedIcon onClick={toggle}/> : <DarkModeOutlinedIcon onClick={toggle}/>}
        <WidgetsOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
      <div className="user">
        <img src="https://media.licdn.com/dms/image/D4D35AQGUghBge0FG_Q/profile-framedphoto-shrink_400_400/0/1678209265252?e=1695290400&v=beta&t=0eYvNBJVHT83nfWyUJDqXt2tq6I2v0azkbDGDYNCCJk" alt="" />
        <span>Vibhor Minocha</span>
      </div>
      </div>
    </div>
  )
}

export default Navbar