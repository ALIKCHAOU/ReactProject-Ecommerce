import React  from 'react';
import './Toggel-button.css';
const Drawerbutton=props=>(
<button className="Toggle-button" onClick={props.click}>
<div className="Toggle-button-line"/>
<div className="Toggle-button-line"/>
<div className="Toggle-button-line"/>
</button>

);
export default Drawerbutton;