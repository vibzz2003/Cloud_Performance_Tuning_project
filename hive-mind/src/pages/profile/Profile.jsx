import "./profile.scss"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://i.pinimg.com/originals/b3/9f/d8/b39fd8fd5ac2e8c25938e2fd1783d016.jpg" alt="" className="cover" />
        <img src="https://media.licdn.com/dms/image/D4D35AQGUghBge0FG_Q/profile-framedphoto-shrink_400_400/0/1678209265252?e=1695290400&v=beta&t=0eYvNBJVHT83nfWyUJDqXt2tq6I2v0azkbDGDYNCCJk" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="small"/>
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="small"/>
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="small"/>
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="small"/>
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="small"/>
            </a>
          </div>
          <div className="center">
            <span>Vibhor Minocha</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>India</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>Vibhor.dev</span>
              </div>
            </div>
              <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  )
}

export default Profile