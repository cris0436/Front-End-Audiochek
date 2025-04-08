
import { Inicio, LayoutUsuarios, LayoutInicio} from '../views';
import { Route,BrowserRouter as Router ,Routes ,Navigate} from 'react-router-dom';

import audios from '../assets/audios';
import React from 'react';

function RouteProtect() {
    
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/audichek/testauditivo' element={<LayoutUsuarios com={'PruebaAudtiva'} />} />
                    <Route path='/audichek/datos-persona' element={<LayoutUsuarios com={'EditUserPage'} />} />
                    <Route path='/audichek/resultados' element={<LayoutUsuarios com={'ResultadosAudiometria'} />} />
                    <Route path='/audichek/recomendaciones' element={<LayoutUsuarios com={'Recommendation'} />} />
                    
                    <Route path='/sign-up' element={<LayoutInicio com={'RegisterForm'} />} />
                    <Route path='/login' element={<LayoutInicio com={'LoginForm'} />} /> 
                    
                    {/* Ruta para manejar páginas inexistentes y redirigir al inicio */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
                
            
          )
    }
export default RouteProtect
  
