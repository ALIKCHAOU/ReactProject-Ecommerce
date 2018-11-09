import React from 'react';
import './Items.css';



function Items() {
    const Dataitem = [
        {
            name: "Leonardo",
            long: (23,12),
            lat:(12,12),
            imgUrl: "http://tunisie-medicale.com/client/medecin/default.png"
        },
      
    ]




    const items = Dataitem.map((Dataitem , index) =>
        <div key={Dataitem .name + index}  className="Item">
        
         
         <img src={Dataitem .imgUrl} alt={`${Dataitem.name}`}  />
            <p>Weapon of choice: </p>
           
         
        </div>
        
    )
    

return (
    <div className="Itemcontainer">
        {items}
    </div>
)
}

export default Items;
