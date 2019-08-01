import React from 'react';
import {Switch,Route} from 'react-router-dom';
import DisplayHourlyDetails from '../DisplayHourlyDetails/DisplayHourlyDetails.react';
import HourlyDetails from '../HourlyDetails/HourlyDetails.react'
import InputFromUserReact from '../InputFromUser/InputFromUser.react';

const Navigation = () => {
 
    return (
        <div >
           
            <Switch>
                <Route exact path="/" component={InputFromUserReact}></Route>
                <Route  path ="/getData0" component={HourlyDetails}></Route>
                <Route  path ="/getData1" component={DisplayHourlyDetails}></Route>
              

            </Switch>
            
        </div>   
    );

}

export default Navigation;