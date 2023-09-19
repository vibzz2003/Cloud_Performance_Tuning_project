import { useContext } from "react"
import "./stories.scss"
import {AuthContext} from "../../context/authContext"
const Stories = () => {

  const {currentUser} = useContext(AuthContext)
  const stories =[
    {
        id: 1,
        name:"Vibhor Minocha",
        image:"https://miro.medium.com/v2/resize:fit:1400/1*YMJDp-kqus7i-ktWtksNjg.jpeg"
    },
    {
        id: 2,
        name:"Vibhor Minocha",
        image:"https://miro.medium.com/v2/resize:fit:1400/1*YMJDp-kqus7i-ktWtksNjg.jpeg"
    },
    {
        id: 3,
        name:"Vibhor Minocha",
        image:"https://miro.medium.com/v2/resize:fit:1400/1*YMJDp-kqus7i-ktWtksNjg.jpeg"
    },
    {
        id: 4,
        name:"Vibhor Minocha",
        image:"https://miro.medium.com/v2/resize:fit:1400/1*YMJDp-kqus7i-ktWtksNjg.jpeg"
    }
  ]
  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>
            {currentUser.name}
          </span>
          <button>+</button>
        </div>
      {stories.map(story=>{
        return(
        <div className="story" key={story.id}>
          <img src={story.image} alt="" />
          <span>
            {story.name}
          </span>
        </div>)
      })}
    </div>
  )
}

export default Stories