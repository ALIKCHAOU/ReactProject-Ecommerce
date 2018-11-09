import React, { Component } from 'react';
import "./Header.css";
import Ordinateur from './Ordinateur';
import Navebar from './Navebar';
import Tel from './Tel';
import Stockage from './Stockage';
import ImpressionCopieurs from './ImpressionCopieurs';
import TVSonPhotos from './TVSonPhotos';
import Electromenager from './Electromenager';
import AccessoriesReseau from './AccessoriesReseau';
import Bureautique from './Bureautique';

class Header extends Component {

 


  render() {


    return (

      <div >

        <Navebar l={this.props.name}/>
          <div className="container">
          <div className='tel'>
            <button className='btn-container'>Téléphonie</button>
            <Tel />
          </div>

          <div className='ord'>
            <button className='btn-container' >Ordinateur</button>
            <Ordinateur />
          </div>



          <div className='Stockage'>
            <button className='btn-container'>Stockage</button>
            <Stockage />
          </div>
          <div className='ImpressionCopieurs'>
            <button className='btn-container'>Impression & Copieurs</button>
            <ImpressionCopieurs />
          </div>
          <div className='TVSonPhotos'>
            <button className='btn-container'>TV Son Photo</button>
            <TVSonPhotos />
          </div>
          <div className='Electromenager'>
            <button className='btn-container'>Electromenager</button>
            <Electromenager />
          </div>
          <div className='AccessoriesReseau'>
            <button className='btn-container'>Accessories	Réseau </button>
            <AccessoriesReseau />
          </div>
          <div className='Bureautique'>
            <button className='btn-container'>Bureautique</button>
            <Bureautique />
          </div>
     
          {console.log(this.props.name)}

        </div>
        

      </div>



    );
  }
}

export default Header;