import { useContext } from "react";
import "./comments.scss"
import { AuthContext } from "../../context/authContext";

const Comments = () => {
    const {currentUser} = useContext(AuthContext)
    const comments = [
        {
          id: 1,
          desc: "Sooo cute",
          name: "Ranya Kaushik",
          userId: 1,
          profilePicture:
            "https://media.licdn.com/dms/image/D5635AQHEWdz7DWEeGw/profile-framedphoto-shrink_800_800/0/1681317665129?e=1695236400&v=beta&t=2rn7GJIENmIRPvO2Ietv2j2xQ6KkYVBC0WeKKHepuBw",
        },
        {
          id: 2,
          desc: "Kutte ka baccha",
          name: "Lakshit Joshi",
          userId: 2,
          profilePicture:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      ];
    return (
        <div className="comments">
            <div className="write">
                <img src= {currentUser.profilePic} alt="" />
                <input type="text" placeholder="write a comment"/>
                <button>Send</button>
            </div>
            {comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments