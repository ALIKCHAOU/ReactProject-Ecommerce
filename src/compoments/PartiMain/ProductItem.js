import React from 'react';
import {  Link } from "react-router-dom";
import {  Col, Card, CardImage, CardBody} from 'mdbreact';






const ProductItems =(props)=>{ props.map((Dataitem , index) =>   <Col className="col-sm-6 col-md-3" key={ props.name + index} >
<span className=" breadcrumb" style={{ marginBottom: "0px" ,width:'247px',backgroundColor:'#888d92'}}><span style={{ fontWeight: "500", margin: "auto", color: "black" }}>{ props.name}</span></span>

  <Card className="mb-2">

    <CardImage className="img-fluid" src={ props.imgUrl+'?set2&size=200x200'} width="200px" height="200px" />
    <CardBody>

      <span style={{ fontSize: '18px', fontWeight: "500", margin: "auto",color:'black' }} >Price:{Dataitem.Prix}</span>


      <div className="btn-group btn-group-sm pull-right " role="group" style={{ margin: "auto",height: "27px" }} >

       <a className="btn btn-red btn-sm" title="Remove" role="button"   ><span className="fa fa-times" style={{ width: "0px",marginTop: "0px" }} ></span></a>{/*onClick={() => actions.removeItem(item.id)} */}
       <Link to="/Edit">  <a className="btn btn-orange btn-sm" title="Edit" role="button" ><span className="fa fa-edit" style={{ width: "0px" ,marginTop: "0px"}}></span></a></Link>
        <a className="btn btn-blue btn-sm " title="Detail" role="button"><span className="fa fa-eye" style={{ width: "0px",marginTop: "0px" }}></span></a>
        <a className="btn  btn-blue btn-sm" title='ADD TO Cart' role="button"><span className='fa fa-shopping-cart' style={{ width: "0px",marginTop: "0px"}}></span></a>
      </div>
    </CardBody>
  </Card>
</Col>)}
export default ProductItems;