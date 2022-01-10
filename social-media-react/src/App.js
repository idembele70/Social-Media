import Login from "./pages/login/Login";
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import Register from "./pages/register/Register"
// import Routes router  from react router dom to Routes between my componets 
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

function App() {
  return (
    //using react-routder dom we wrapped ours routes in a router as subsitutde for div then inside we set another sub for div hich is routes and insite routes we had specifc routes that rendered a componennt elemnt using hte path given
      <Router>
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/profile/:username' element={<Profile/>} />
         <Route path='/register' element={<Register/>} />
         </Routes>
      </Router>
      
    
  ); 
}

export default App;

