import React from 'react';
import {connect} from 'react-redux'; 
import './DisplayHourlyDetails.css';

const DisplayHourlyDetails = () => {

    return (
        <div className='displayhourlydetails_wrapper'>
<p>HELLO</p>

        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        hourlyData: state.payLoadFiltered
    }
}

export default connect(mapStateToProps)(DisplayHourlyDetails);
