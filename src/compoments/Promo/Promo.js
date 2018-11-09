import React from 'react';
import './Promo.css';
import {  Link } from "react-router-dom";
import Promo0 from'../Promo/ImagePromo/promo8.jpg';
import Promo1 from'../Promo//ImagePromo/promo1.jpg';
import Promo2 from'../Promo/ImagePromo/promo2.jpg';
import Promo3 from'../Promo/ImagePromo/promo3.jpg';
import Promo4 from'../Promo/ImagePromo/promo4.jpg';
import Promo5 from'../Promo/ImagePromo/promo5.jpg';
import Promo6 from'../Promo/ImagePromo/promo6.jpg';
import Promo7 from'../Promo/ImagePromo/promo7.jpg';
const Promo = () => {

    return (    <div class="homegrid">
                <div class="image">

                   <Link to="/"> <img src={Promo0} alt=" Php Promo" /></Link> 

                </div>
                <div class="image">

                   <Link to="/"><img src={Promo1} alt="Promo" /></Link> 

                </div>
                <div class="image">

                    <Link to="/"><img src={Promo2} alt="Promo"/></Link>

                </div>
                <div class="image">

                    <Link to="/"><img src={Promo3} alt="Promo" /></Link>

                </div>
                <div class="image">

                  <Link to="/"><img src={Promo4} alt="Promo" /></Link>  
                </div>
                <div class="image">

                   <Link to="/"><img  src={Promo5} alt="Promo"/></Link> 
                     
                    </div>
                    <div class="image">

                      <Link to="/"><img src={Promo6} alt="Promo"/></Link>  
                      
                        </div>
                        <div class="image">

                        <Link to="/"><img src={Promo7} alt="Promo"/></Link>    
                      
                            </div>
  
                            </div >




                    );
                
                
                };
                    
export default Promo;