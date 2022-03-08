// import React from 'react'
import Navbar from './component/navbar';
import Adduser from './component/adduser';
import Alluser from './component/alluser';
import Admin from './component/admin';
import Edit from './component/Edituser';
// import BrowserRouter  from 'react-router-dom';
// import Route from 'react-router-dom';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Notfound from './component/Notfound';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Admin/>} exact />
    <Route path="/add" element={<Adduser/>} exact />
    <Route path="/all" element={<Alluser/>} exact />
    <Route path="/edit/:id" element={<Edit/>} exact />
    <Route component={<Notfound/>} />
     </Routes>
    </BrowserRouter>
 
  );
}

export default App;
