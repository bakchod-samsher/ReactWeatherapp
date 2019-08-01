import React from 'react';
import {connect} from 'react-redux';
import './UserFields.css';
import {Link,withRouter} from 'react-router-dom';
//import {r} from 'react-router';
const UserFields = (props) => {

    if(props.isdataFiltered){
     
        return (
       
            <div className='userfields_wrapper'>
                   

                <button className="btn" onClick={props.action} >Search</button>
    <div className="d-flex flex-row justify-content-center">

        {props.data.map((e,key)=>
    
    <div className="p-2" key={key}>
       
        <div className="card" key={key}>
        
            <div className="card-body" key={key}>
           <Link to="/getData0">link</Link>
       <p className="p1">{parseInt(e.temp_min)-273}</p>
       <p className="p2"> {parseInt(e.temp_max)-273}</p>
      
      
       
        </div>
      
        </div>
        
        </div>       )}
    
      
    </div>
   
            </div>
        );
     
    }

    return (
        <div className='userfields_wrapper'>
<button className="btn" onClick={props.action}>Search</button>
<Link to="/getData1"></Link>
        </div>
        
    );

}


const mapStateToProps = (state) => {

    return {
        data: state.payLoadFiltered,
        isdataFiltered: state.isFiltered
    }
}


export default withRouter(connect(mapStateToProps)(UserFields));