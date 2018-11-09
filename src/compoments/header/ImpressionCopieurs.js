import React from 'react';
import './ImpressionCopieurs.css'
const ImpressionCopieurs = () => {
  return (
    <div>
      <div className="dropdow">
        <div className="dropdown-content">
          <div className='container-impression'>
            <div>
              <span className="titlestyle">IMPRIMANTES</span>
              <ul className='itemul'>
                <li>Multifonction Laser Couleur</li>
                <li> Multifonction Jet d'encre</li>
                <li>Imprimantes Laser Noir/Blanc</li>
                <li>Imprimantes Jet d'encre</li>
                <li>Art Graphique</li>
                <li>Imprimante matricielle</li>
               
              </ul>
            </div>
            <div>
              <span className="titlestyle">CONSOMMABLES</span>
              <ul className='itemul'>
                <li>Toner</li>
                <li>Cartouche</li>
                <li>Ruban</li>
                <li>Bouteille d'encre</li>
                <li>Poudre pour Toner</li>
                <li>Rouleau thermique</li>
              
              </ul>
            </div>
            <div>
              <span className="titlestyle">PHOTOCOPIEURS</span>
              <ul className='itemul'>
                <li> Photocopieurs A4 </li>
                <li>Photocopieurs A3</li>
                <li>Accessoires photocopieurs</li>
                <li>IMPRIMANTE A RÉSERVOIR INTÉGRÉ</li>
                <li>SERVEUR D'IMPRESSION</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ImpressionCopieurs;