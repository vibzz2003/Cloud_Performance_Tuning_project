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

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
      <Link to="/">
        <span>HiveMind</span>
      </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
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
        <img src="https://media.licdn.com/dms/image/D5635AQHEWdz7DWEeGw/profile-framedphoto-shrink_800_800/0/1681317665129?e=1695236400&v=beta&t=2rn7GJIENmIRPvO2Ietv2j2xQ6KkYVBC0WeKKHepuBw" alt="" />
        <span>Ranya Kaushik</span>
      </div>
      </div>
    </div>
  )
}

export default Navbar