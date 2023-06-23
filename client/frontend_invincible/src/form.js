import Student from "./images/student.png";
import Faculty from "./images/faculty.jpg";
import Warden from "./images/warden.png";
import "./form.css";
import { useState } from "react";

function Form({ value }) {

    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  

  if (value === "Student") {
    return (
      <>
        <div className="main_content">
        <img src={Student} alt="student" className="img_cont"></img>
        
        <div className="form-cont">
            
            <form className="form_">
            <heading className="heading"><span  className="login" style={{color:"black"}}>Login</span></heading>
            <input
        type="text"
        placeholder="Username"
        className="login-input"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit" className="login-button  login-input">Login</button>
            </form>
          </div>

          <div className="form-cont">
            
            <form className="form_">
            <heading className="heading"><span  className="signup" style={{color:"black"}}>SignUp</span></heading>
            <input
        type="text"
        placeholder="Username"
        className="login-input"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Registration Number"
        className="login-input"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Block"
        className="login-input"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Room Number"
        className="login-input"
        onChange={e => setUsername(e.target.value)}
      />
      <button type="submit" className="login-button  login-input">SignUp</button>
            </form>
          </div>
        </div>
      </>
    );
  } else if (value === "Faculty")
    return (
      <>
        <div className="main_content">
          <img src={Faculty} alt="student" className="img_cont" ></img>

          <div className="form-cont">
            
            <form className="form_">
            <heading className="heading">Login</heading>
            <input
        type="text"
        placeholder="Username"
        className="login-input"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit" className="login-button  login-input">Login</button>
            </form>
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <div className="main_content">
        <img src={Warden} alt="student" className="img_cont"></img>
        <div className="form-cont">
            
            <form className="form_">
            <heading className="heading">Login</heading>
            <input
        type="text"
        placeholder="Username"
        className="login-input"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit" className="login-button  login-input">Login</button>
            </form>
          </div>
        </div>
      </>
    );
}

export default Form;

