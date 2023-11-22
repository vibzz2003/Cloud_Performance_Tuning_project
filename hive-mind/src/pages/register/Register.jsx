import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";
import img1 from "../../media/1.png"

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://98.70.51.202/api/auth/register", inputs,{
        withCredentials:true
      });
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err)


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
            <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
            <input type="email" placeholder="Email" name="email" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register