
import "./nav.css";
import { useState } from "react";
import Form from "./form.js";


function First() {
  const [active_mem, setAct] = useState("Student");
   
  console.log(active_mem);
  return (
    <>
      <div className="main_container Student" style={active_mem==="Student"?{color:"red"}:{color:"black"}}>
        <nav className="navbar_">
          <ul className="navbar">
            <li
              className="item"
              onClick={() => {
                setAct((active_mem) => "Student");
              }}
              style={{ color: active_mem=== "Student" ? "#FFBB29" : "" }}
            >
              Student
            </li>
            <li
              className="item"
              onClick={() => {
                setAct((active_mem) => "Warden");
              }}

              style={{ color: active_mem=== "Warden" ? "#FFBB29" : "" }}
            >
              Warden
            </li>
            <li
              className="item"
              onClick={() => {
                setAct((active_mem) => "Faculty");
              }}
              style={{ color: active_mem=== "Faculty" ? "#FFBB29" : "" }}
            >
              Faculty
            </li>
          </ul>
        </nav>
        <Form value={active_mem}></Form>
        
        
      </div>
    </>
  );
}

export default First;
