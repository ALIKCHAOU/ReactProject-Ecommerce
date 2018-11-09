import React,{Component} from 'react';
import logo from'./fecbook.png';
import twit from'./twit.png';
import youtube from'./youtube.png';
import gmail from'./gmail.png';
import './forms.css';


const img = require('../images/p.jpg')
const img2 = require('../images/camion.jpg')
const img4 = require('../images/tel.jpg')


class Forms extends Component{
  
        render(){

          

            return(
                <div>
                 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
                   <div className="main-footer">
                     <div className="block-img">
                       <img className="img" src={img} alt="Payement sur 12 Mois"/><span>Possibilite de Payement sur 12 Mois</span>
                       <img className="img" src={img2} alt="Livraision "/><span>Livraison Payent en 48h à partir de 30dt</span>
                       <img className="img" src="open.jpg" alt="hjD"/><span>Ouvert tous les jours de 8h à 19h</span>
                       <img className="img" src={img4} alt="hkzranc"/><span>Contactez-nous au <br/>+216 54 43 22 54<br/>+216 54 07 99 79</span>
                       
                     </div>
                   </div>
                   
                   <div className="containers">
                        <div className="block-information">
                            <div className="cl1">
                            <h4>Notre Societe</h4>
                            <a className="ahover" href="" >A propos</a><br/>
                            <a className="ahover" href="" >Nous contacter</a><br/>
                            <a className="ahover" href="" >Magasin</a><br/>
                            </div>
                            <div className="cl1">
                            <h4>Mon compte</h4>
                            <a className="ahover" href="" >Adresses</a><br/>
                            <a className="ahover" href="" >Commandes</a><br/>
                            <a className="ahover" href="" >Paiement sécurisé</a><br/>
                            </div>
                         </div>
                        
                         <div className="block-ref"> 
                          <div className="face"><img className="logocss"src={logo} alt="ll"/></div>
                          <div className="face"><img className="logocss"src={twit} alt="ll"/></div>
                          <div className="face"><img className="logocss"src={youtube} alt="ll"/></div>
                          <div className="face"><img className="logocss"src={gmail} alt="ll"/></div>
                          </div>
                         <div className="block-generale">
                           <h4>INFORMATION</h4>
                               <strong>Best&Price</strong>
                               <p>3042 Sfax,Tunis<br/>
                               <strong>Écrivez-nous</strong>:best&price@gmail.com</p>
                         </div>

                   </div>
               </div>

            );
        }
    
}
export default Forms;