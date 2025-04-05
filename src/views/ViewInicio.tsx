import MenuIncicio from '../components/menuIncio';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.png';

export const Inicio = () => {
  return (
    <div className="inicio bg-light min-vh-100">
      <MenuIncicio />
      <section id="home" className="hero d-flex align-items-center justify-content-center py-5">
        <div className="container text-center">
          <div className="card shadow p-4 bg-white rounded">
            <h1 className="display-5 fw-bold mb-4">
              Bienvenido a <span style={{ color: '#264e86' }}>Audiocheck</span>
            </h1>
            <div className="d-flex justify-content-center mb-4">
              <img src={icon} alt="logo audiocheck" className="img-fluid" style={{ maxWidth: '150px' }} />
            </div>
            <p className="lead mb-4">
              La aplicación web que te permite realizar <strong>test auditivos precisos</strong> de manera sencilla y rápida.
            </p>
            <Link to="/login" className="btn btn-primary btn-lg">
              Comenzar Test
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
