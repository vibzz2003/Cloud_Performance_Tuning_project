import { Link } from "react-router-dom"
import "./register.scss"
import img1 from "../../media/1.png"

export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1><b>HIVEMIND</b></h1>
          <p>Welcome to <b>HIVEMIND</b>, where you can enjoy the world of social interactions without thinking about the addictions related to it. We have got your back!.</p>
          <span>Already have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
        <img src={img1} alt="logo" />
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register