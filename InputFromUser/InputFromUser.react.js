import React from 'react';
import {connect} from 'react-redux';
import './InputFromUser.css';
import UserFields from '../UserFields/UserFields.react';
import {getListFromServer,OnEnterChangeState} from '../CommonReducer';


class InputFromUser extends React.Component {
    

  
    render() {
        if(!this.props.isLoaded){
            return (
           
                <div className='inputfromuser_wrapper'>
                    
                    <input  onChange={e=>this.props.getInput(e.target.value)}></input>
    <UserFields action={this.props.getData}></UserFields>
                </div>
            );
        }
        else{
            return (
           
                <div className='inputfromuser_wrapper'>
             <h1>{this.props.temperatureData.city.id}</h1>
                </div>
            );
        }
       
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.payloadCityName,
        temperatureData: state.payLoadData,
        isLoaded: state.isLoaded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => {
            dispatch(getListFromServer())
        },

       getInput:(cityName)=>{
        OnEnterChangeState(cityName)
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputFromUser)