import MenuIncicio from '../components/menuIncio'
import "../styles/menuIncio.css"
import "../styles/inicio.css"
import icon from "../assets/icon.png"
export const inicio = () => {
  return (
      <div className='inicio'>
        <MenuIncicio/>
        <section id="home" className="hero">
          <div className="hero-content">
           
              <h1>Bienvenido a <span className="highlight">Audiocheck</span></h1>
              <img className="logo" src={icon} alt="logo audiochek" />
            
            
            <p>La aplicación web que te permite realizar <strong>test auditivos precisos</strong> de manera sencilla y rápida.</p>
            <a href="#test" className="btn">Comenzar Test</a>
          </div>
        </section>
      </div>
     
  )
}
export default inicio


