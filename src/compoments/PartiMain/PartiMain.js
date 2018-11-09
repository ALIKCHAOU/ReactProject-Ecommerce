import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Container} from 'mdbreact';
import ProductItems from './ProductItem'
class PartiMain  extends Component { 
  constructor(props){
    super(props)
   this.state={
       Dataitem : [ ],
    }
  }
  


  
  

 
  
render() {
return (
   <div >
  <div class="btn-group-sm btn-group " role="group" aria-label="Button group with nested dropdown" style={{ margin:'15px 15px' }}>
  <button type="button" className="btn btn-primary" title="To page 1" >«</button>
    <button type="button" className="btn btn-primary" >1</button>
    <button type="button" className="btn btn-primary">2</button>
    <button type="button" className="btn btn-primary">3</button>
    <button type="button" className="btn btn-primary">4</button>

    <button type="button" className="btn btn-primary" title="To page 1" > »</button>

     </div>
      <Container style={{ display: "flex", height: "100%", width: "100%", flexWrap: "wrap",margin:'50px' }}>
       {ProductItems}
      </Container>
      </div>
)
}
}


export default PartiMain;

