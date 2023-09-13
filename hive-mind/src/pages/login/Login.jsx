import { Link } from "react-router-dom"
import "./login.scss"
import img1 from "../../media/1.png"

export const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          
          <p>Welcome back to <b>HIVEMIND</b></p>
          <span>Don't have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <img src={img1} alt="logo" />
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
