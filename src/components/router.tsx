import React from 'react'
import from '../vis'
import { Route,Routes,Navigate} from 'react-router-dom';

export default function RouteProtect() {
    
        return (
       
                <Routes>

                    <Route path='/' element={<Navigate to="/home"/>} />
                      
                   {/* Redirigir '/' a '/home' */}
                   <Route path="/*" element={<Navigate to="/home" />} />
                </Routes>
           
                
            
          )
    }
    
  
