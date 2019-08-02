import React from 'react';
import {Switch,Route} from 'react-router-dom';
//import DisplayHourlyDetails from '../DisplayHourlyDetails/DisplayHourlyDetails.react'; <Route  path ="/getData1" component={DisplayHourlyDetails}></Route>
import HourlyDetails from '../HourlyDetails/HourlyDetails.react'
import InputFromUserReact from '../InputFromUser/InputFromUser.react';

const Navigation = () => {
 
    return (
        <div >
           
            <Switch>
                <Route exact path="/" component={InputFromUserReact}></Route>
                <Route  path ="/getData/:id" component={HourlyDetails}></Route>
            
              

            </Switch>
            
        </div>   
    );

}

export default Navigation;