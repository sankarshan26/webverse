import "./App.css";
import First from "./nav";
import Student from "./Student";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  
  return (
    <Router>
      <div className="app_container">
      <First></First>
      {/* <Student></Student> */}
      </div>
</Router>
    
  );
}

export default App;
