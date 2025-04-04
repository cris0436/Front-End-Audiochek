mport React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
// Importación de imágenes
import lugarSilencioso from '../assets/lugar_silencioso.png';
import usoAudifonos from '../assets/uso_audifonos.png';
import volMax from '../assets/vol_max.png';

const Recommendation: React.FC = () => {
  const navigate = useNavigate();
  const btnAceptar = () => {
    navigate("/audichek/testauditivo")
  }
  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-primary text-white text-center">
          <h4 className="mb-0">Recomendaciones para una Prueba Auditiva Óptima</h4>
        </div>
        <div className="card-body">
          <div className="row text-center mb-4">
            <div className="col-md-4 mb-3">
              <img src={lugarSilencioso} alt="Lugar silencioso" className="img-fluid mb-2" style={{ maxHeight: '150px' }} />
              <p>Realiza la prueba en un <strong>lugar tranquilo y sin ruido</strong>.</p>
            </div>
            <div className="col-md-4 mb-3">
              <img src={usoAudifonos} alt="Uso de audífonos" className="img-fluid mb-2" style={{ maxHeight: '150px' }} />
              <p>Usa <strong>audífonos de buena calidad</strong> para mayor precisión.</p>
            </div>
            <div className="col-md-4 mb-3">
              <img src={volMax} alt="Volumen máximo" className="img-fluid mb-2" style={{ maxHeight: '150px' }} />
              <p>Configura el <strong>volumen al máximo</strong> o a un nivel cómodo.</p>
            </div>
          </div>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">Evita hacer la prueba si tienes congestión o molestias en los oídos.</li>
            <li className="list-group-item">Asegúrate de que tu dispositivo tenga buena batería o esté conectado.</li>
            <li className="list-group-item">Cierra aplicaciones que puedan interrumpir con sonidos o notificaciones.</li>
            <li className="list-group-item">Sigue las instrucciones con atención y mantén la calma durante la prueba.</li>
          </ul>

          <div className="text-center mt-4">
            <button className="btn btn-success btn-lg px-5" onClick={btnAceptar}>Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;