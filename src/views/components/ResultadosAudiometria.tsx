import React from 'react'
import DemostrarAudimetriaCorta from '../../viewmodels/DemostrarAudimetriaCorta'
import DemostrarAudimetriaLarga from '../../viewmodels/DemostrarAudimetriaLarga'
const ResultadosAudiometria = () => {
  return (
    
    <div className="container">
      <div className="row">
        {/* Columna para audimetría corta */}
        <div className="col-12 col-md-6">
          <DemostrarAudimetriaCorta />
        </div>
        
        {/* Columna para audimetría larga */}
        <div className="col-12 col-md-6">
          <DemostrarAudimetriaLarga />
        </div>
      </div>
    </div>
  )
}

export default ResultadosAudiometria
