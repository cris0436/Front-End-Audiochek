
import { Inicio, LayoutUsuarios, LayoutInicio} from '../views';
import { Route,BrowserRouter as Router ,Routes } from 'react-router-dom';

 function RouteProtect() {
    
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<Inicio/>} />
                    <Route path='/audichek/testauditivo' element ={<LayoutUsuarios com={'PruebaAudtiva'}/>} />
                    <Route path='/audichek/datos-persona' element ={<LayoutUsuarios com={'EditUserPage'}/>} />
                    <Route path="/audichek/recomendaciones" element={<h1>resultados</h1>} />
                    <Route path="/audichek/resultados" element={<h1>resultados</h1>} />
                    
                    <Route path="/sign up" element={<LayoutInicio com= {'RegisterForm'}/>} />
                    <Route path='/login' element={<LayoutInicio com={'LoginForm'}/>} /> 
                  
                </Routes>
            </Router>
                
            
          )
    }
export default RouteProtect
  
