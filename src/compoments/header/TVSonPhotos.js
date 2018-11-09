import React from 'react';
import './TVSonPhotos.css'
const TVSonPhotos = () => {
  return (
    <div>
      <div className="dropdow">
        <div className="dropdown-content">
          <div className='container-Tvsonphotos'>
            <div>
              <span className="titlestyle">VIDÉOPROJECTEURS</span>
              <ul className='itemul'>

                <li> Vidéoprojecteurs</li>
                <li>Accessoires pour Vidéoprojecteurs</li>
              </ul>
            </div>

            <div>
              <span className="titlestyle">TÉLÉVISEURS</span>
              <ul className='itemul'>
                <li>Téléviseurs</li>
                <li>Accessoires pour téléviseurs</li>
                <li> Meubles TV</li>
              </ul>
            </div>
            <div>

              <span className="titlestyle">SON</span>
              <ul className='itemul'>
                <li>Ensemble Home Cinéma</li>
                <li>Hauts Parleurs Bluetooth</li>
                <li> Radio - Réveille</li>
                
                <li> Bar de son</li>
              </ul>
            </div>



            <div>
              <span className="titlestyle">APPAREILS PHOTOS</span>
              <ul className='itemul'>
                <li>Appareils Photos</li>
                <li> Accessoires-Appareils Photos</li>
              </ul>
            </div>
            <div>
              <span className="titlestyle">RÉCEPTEUR</span>
              <ul className='itemul'>
                <li>Récepteur</li>
                <li> Accessoires pour Récepteurs</li>
                <li>Abonnement Récepteur</li>
              </ul>
            </div>

           

          </div>

        </div>



      </div>
    </div>
  )
}
export default TVSonPhotos;