import React, { Component } from 'react';
import Header from './compoments/header/Header';

import Contact from './compoments/Contact/Contact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import CarouselForm from './compoments/Carousel/carousel';

import './App.css';
import Forms from'./compoments/Forms';
import { Route } from "react-router-dom";

import PartiMain from './compoments/PartiMain/PartiMain';
import Login from './compoments/Login/Login';

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };
 
  render() {
    
    return (
      <div className="App">
                 {console.log(JSON.stringify(this.state.fields.UserPseudo))}
                  
              <Header  name={JSON.stringify(this.state.fields.UserPseudo)} />
             
        <Route exact path="/" component= {CarouselForm} />
        <Route exact path="/Login"   render={(props)=> <Contact onChange={fields => this.onChange(fields)}/>} />
        <Route exact path='/Product' component={PartiMain}/>
        <Route exact path='/Contact' component={Login}/>
      
        
   
      

       
         <Forms />
         {JSON.stringify(this.state.fields, null, 2)}
      </div>
    );
  }
}

export default App;
