import { useState } from "react";
import "./Student.css"
function Student() {

    const [sta,setSta] = useState("Complaints")
    const [print_,handleClick]= useState(
        (<form class="leave_form">
        <h2 className="heading_">Leave Form</h2>
        <div className="Form_details">
            <label className="lbl">Leave Id : </label> <input type="text" className="form_item"></input>
            <br></br><br></br>
            <label className="lbl">Leave Type : </label> <input type="text" className="form_item"></input>
            <br></br><br></br>
            <label className="lbl">Leave Date : </label> <input type="date" className="form_item"></input>
            <br></br><br></br>
            <label className="lbl">Leave Time : </label> <input type="time" className="form_item"></input>
            <br></br><br></br>
            <label className="lbl">Leave Duration: </label> <input type="number" className="form_item"></input>
            <br></br><br></br>
            <div className="btn-cont">
            <button className="btn">Apply</button></div>
        </div>
    </form>)
    );
    

    // function handle(ev){
    //     setSta(sta=>ev)
    // }
           
    
  return (
    <>
      <div className="main_container_">
        <div className="Left">
            <ul className="menu-items">
                <li  className="item" onClick={()=>{setSta(sta=>"Leave") ; handleClick(print_=>(<form class="leave_form">
        <h2 className="heading_">Leave Form</h2>
        <div className="Form_details">
            <label className="lbl">Leave Id : </label> <input type="text" className="form_item"></input>
            <br></br><br></br>
            <label className="lbl">Leave Type : </label> <input type="text" className="form_item"></input>
            <br></br><br></br>
            <label className="lbl">Leave Date : </label> <input type="date" className="form_item"></input>
            <br></br><br></br>
            <label className="lbl">Leave Time : </label> <input type="time" className="form_item"></input>
            <br></br><br></br>
            <label className="lbl">Leave Duration: </label> <input type="number" className="form_item"></input>
            <br></br><br></br>
            <div className="btn-cont">
            <button className="btn">Apply</button></div>
        </div>
    </form>))}}>Leave</li>
                <li className="item" onClick={()=>{setSta(sta=>"Leave") ; handleClick(print_=> (<form class="leave_form">
        <h2 className="heading_">Complaints Form</h2>
        <div className="Form_details">
            <label className="lbl">Complaints Id : </label> <input type="text" className="form_item"></input>
            <br></br><br></br>
            <label className="lbl">Complaints Type : </label> <input type="text" className="form_item"></input>
            <br></br><br></br>
            <label className="lbl">Complaints Date : </label> <input type="date" className="form_item"></input>
            <br></br><br></br>
            <label className="lbl">Complaint Severity : </label> <input type="number" className="form_item"></input>
            <br></br><br></br>
            <label className="lbl">Complaint Description : </label> <input type="text" className="form_item"></input>
            <br></br><br></br>
            <div className="btn-cont">
            <button className="btn">Apply</button></div>
        </div>
    </form>))}}>Complaints</li>
                <li className="item" onClick={()=>{setSta(sta=>"Leave") ; handleClick()}}>Room Details</li>
                <li className="item" onClick={()=>{setSta(sta=>"Leave") ; handleClick()}}>Register Courses</li>
                <li className="item" onClick={()=>{setSta(sta=>"Leave") ; handleClick()}}>Mess Change</li>
                <li className="item" onClick={()=>{setSta(sta=>"Leave") ; handleClick()}}>Events</li>
            </ul>
        </div>
        <div className="Right" >
        {print_}
        </div>
      </div>
    </>
  );
}

export default Student;
