import React from 'react'
import { Inicio, Login, Register } from '../views';

import { Route,BrowserRouter as Router ,Routes } from 'react-router-dom';

 function RouteProtect() {
    
        return (
            <Router>
                <Routes>

                    <Route path='/' element={<Inicio/>} />
                    <Route path='/login' element={<Login/>} /> 
                    <Route path="/sign up" element={<Register/>} />
                  
                  
                </Routes>
            </Router>
                
            
          )
    }
export default RouteProtect
  
