import React from 'react';
import './Ordinateur.css'
const Ordinateur = () => {
  return (
    <div>
      <div className="dropdow">
        <div className="dropdown-content">
          <div className='container-ord' >
            <div>
              <span className="titlestyle">Ordinateur </span>
              <ul className='itemul'>
                <li> PC portable</li>
                <li>  Ordinateur de bureau  </li>
                <li>PC Tout en un</li>
              </ul>
            </div>



            <div>
              <span className="titlestyle">Gaming</span>
              <ul className='itemul'>
                <li>Tablette tactile</li>
                <li>Ecran d'ordinateur</li>
              </ul>
            </div>


            <div>
              <span className="titlestyle">Logiciels</span>
              <ul className='itemul'>
                <li>  Serveur informatique</li>
              </ul>
            </div>



          </div>

        </div>

      </div>
    </div>
  )
}
export default Ordinateur;