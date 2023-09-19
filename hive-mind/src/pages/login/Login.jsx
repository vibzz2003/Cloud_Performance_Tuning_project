import { Link } from "react-router-dom"
import "./login.scss"
import img1 from "../../media/1.png"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

export const Login = () => {

  const{login} = useContext(AuthContext);

  const handleLogin = () =>{
    login();
  };

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
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
