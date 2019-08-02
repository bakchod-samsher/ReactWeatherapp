import React from 'react';

import './DisplayHourlyDetails.css';

const DisplayHourlyDetails = (props) => {

    return (
        <div className='displayhourlydetails_wrapper'>

{props.DataObject.map((e,key)=>
<div className="card" key={key}>
    <div className="card-body" key={key}>

        <p>{e.main.temp_min}</p>
        <p>{e.main.temp_max}</p>
      

    </div>
</div>)}

                


            

        </div>
    );

}

export default DisplayHourlyDetails;