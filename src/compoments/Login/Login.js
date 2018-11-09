
import React from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// library.add(faStroopwafel)
// library.add(faEnvelope)
// <FontAwesomeIcon icon="search" />
import './Login.css'
const Login = () => {
    return (

<div style={{display:"flex", margin:"20px"}}>
        <div  className="col-xs-12 col-sm-3">

            <div className="contact-rich" style={{border:' 1px solid #f3f2f2'}}>
                <h4>Informations</h4>
                <div className="block">
                    <div class="icon"><i className="material-icons"></i></div>
                    <div class="data">BestPrice<br />10 Rue Saint Augustin<br />1082 Tunis<br />Tunisie</div>
                </div>
                <hr />
                <div className="block">
                    <div className="icon"><i className="material-icons"></i></div>
                    <div className="data">
                        Appelez-nous :<br />
                        <a href="tel:+216 31 31 00 00">+216 31 31 00 00</a>
                    </div>
                </div>
                <hr />
                <div className="block">
                    <div className="icon">><i className="material-icons"></i></div>
                    <div classNames="data">
                        Fax :<br />
                        +216 32 40 66 06
          </div>
                </div>
                <hr />
                <div className="block">
                    <div className="icon"><i className="material-icons"></i></div>
                    <div className="data email">
                        Envoyez-nous un e-mail :<br />
                    </div>
                    <a href="mailto:contact@bestPrice.tn">contact@bestPrice.com.tn</a>
                </div>
            </div>

        </div> 
        <section id="main" className=' col-xs-12 col-sm-9'>

    

    
        <section id="content" className="page-content card card-block">
          
          
    <section class="contact-form">
    <form >
  
      
      <section className="form-fields">
  
        <div className="form-group row">
          <div className="col-md-9 col-md-offset-3">
            <h3>Contact</h3>
          </div>
        </div>
  
        <div className="form-group row">
          <label className="col-md-3 form-control-label">Sujet</label>
          <div className="col-md-6">
            <select name="id_contact" className="form-control form-control-select">
                            <option value="2">Service client</option>
                            <option value="3">Service commandes</option>
                            <option value="1">Webmaster</option>
                        </select>
          </div>
        </div>
  
        <div className="form-group row">
          <label className="col-md-3 form-control-label">Adresse e-mail</label>
          <div className="col-md-6">
            <input className="form-control" name="from" type="email" value="" placeholder="votre@email.com"/>
          </div>
        </div>
  
    
        <div className="form-group row">
          <label className="col-md-3 form-control-label">Message</label>
          <div className="col-md-9">
            <textarea className="form-control" name="message" placeholder="Comment pouvons-nous aider ?" rows="3"></textarea>
          </div>
        </div>
  
      </section>
  
      <footer className="form-footer text-xs-right">
        <input className="btn btn-primary" type="button" name="submitMessage" value="Envoyer"/>
      </footer>
  
    </form>
  </section>
  
  
        </section>
      
  
      
        <footer className="page-footer">
          
          
          
        </footer>
      
  
    </section>
    </div>





      

    )
};

export default Login;
