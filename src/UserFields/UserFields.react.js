import React from 'react';

import './UserFields.css';

const UserFields = (props) => {

    return (
        <div className='userfields_wrapper'>
<input type="text" placeholder="ENTER VALUE HERE" value={props.valueOfInputField}></input>
        </div>
    );

}

export default UserFields;