import React from 'react';

import './UserFields.css';

const UserFields = (props) => {

    return (
        <div className='userfields_wrapper'>
<button onClick={props.action}>Search</button>
        </div>
    );

}

export default UserFields;