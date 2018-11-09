import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import "./Contact.css";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserPseudo:'',
      firstname: '',
      Errfirstname: '',
      Lastname: '',
      Errlastname: '',
      email: '',
      ErrEmail: '',
      Password: '',
      ErrPassword: '', 
      ErrUserPseudo:'',
     
    };



  }

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.onChange({ [e.target.name]: e.target.value });
  }


  validation = () => {
    let isError = false;
    const errors = {
      ErrUserPseudo:'',
       Errfirstname: '',      
      Errlastname: '',      
      ErrEmail: '',    
      ErrPassword: '',   
    };
    if (this.state.UserPseudo.length < 5) {
      isError = true;
      errors.ErrUserPseudo = ' UserPseudo is less then 4 carater';
    }
    if (this.state.firstname.length < 5) {
      isError = true;
      errors.Errfirstname = 'firstName is less then 4 carater';
    }
    if (this.state.Lastname.length < 3) {
      isError = true;
      errors.Errlastname = 'lastName is less then 4 carater';
    }
    if (this.state.email.indexOf('@')===-1) {
      isError = true;
      errors.ErrEmail = 'require valide Email';
    }
    if (this.state.Password.length<4) {
      isError = true;
      errors.ErrPassword = 'Solid passeword';
    }

   
      this.setState({
        ...this.state,
        ...errors
      });
    
    return isError;

  }
  OnSubmit = (e) => {
    // console.log(this.state);
    e.preventDefault();
    this.setState({
      Errfirstname: '',      
      Errlastname: '',      
      ErrEmail: '',    
      ErrPassword: '', 
      ErrUserPseudo:''    

    })
    this.props.onChange({ [e.target.name]: e.target.value });

    // clear form 
    const err = this.validation();
    if (!err) {
      this.setState({
        UserPseudo:'',
        firstname: '',
        Lastname: '',
        email: '',
        Password: '',
       
      })
      /*this.props.onChange({
        firstname: '',
        Lastname: '',
        email: '',
        Password: '',
        Loadpicture: false,
      })*/
    }
  }



  render() {
    return (

      <form  className='FormInscrit'>
        <div>
         <span className='titleform'>User Pseudo:</span> 
          <input type="text" value={this.state.UserPseudo} Errtext={this.state.ErrUserPseudo} onChange={this.change} placeholder=" UserPseudo." name="UserPseudo" />
          <div className='error'>{this.state.ErrUserPseudo}</div>
        </div>
        
        <div>
         <span className='titleform'>FirstName:</span> 
          <input type="text" value={this.state.firstname} Errtext={this.state.Errfirstname} onChange={this.change} placeholder=" FirstName.." name="firstname" />
          <div className='error'>{this.state.Errfirstname}</div>
        </div>
        
       
        <div>
           <span className='titleform'>LastName:</span>
          <input type="text" value={this.state.Lastname} Errtext={this.state.Errlastname} onChange={this.change} placeholder=" lastName.." name="Lastname" />
          <div className='error'>{this.state.Errlastname}</div>
        </div>
        
       
        <div>
         <span className='titleform'>Mail Adress:</span> 
        <input type="email" value={this.state.email} Errtext={this.state.ErrEmail} onChange={this.change} placeholder=" Email .." name="email" />
        <div className='error'>{this.state.ErrEmail}</div>
        </div>
       
       
        <div>
         <span className='titleform'> Password:</span>
          <input type="password" value={this.state.Password} Errtext={this.state.ErrPassword} onChange={this.change} placeholder="Password ..." name="Password" />
          <div className='error'>{this.state.ErrPassword}</div>    
        </div>
    
       
        <input type="checkbox" value="condition"/>  <label>I accept the Trems and Conditions</label>
       
       <button onClick={(e) => this.OnSubmit(e)}>    {/*<Link to="/">*/}Signe-up&Get-Promotion  {/*</Link>*/}</button> 

      </form>
    );
  }
}

export default Contact;