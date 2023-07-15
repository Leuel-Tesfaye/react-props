import React from 'react';
import ReactDOM from 'react-dom';

/** props stands for properties and is being used to pass data from one component to another and mostly from parent component to child component . 
 * In short props are data carrier or the means to transport data. 
 * 
 * function syntax : 
 * const getUserInfo = (firstName, lastName, country) =>{ 
 * return ` ${firstName} ${lastName} live in ${country}`
 * }
 * getUserInfo ('Prince', 'Hope', 'Ethiopia')
 */
  const User = (props) =>{
    return (
      <div>
          <h1>
            {props.firstName}
            {props.lastName}
          </h1>
          <small>{props.country}</small>
      </div>
    )
  }

const rootElement = document.getElementById('root');
ReactDOM.render(<User firstName= 'Prince' lastName = 'Hope'  country = 'Ethiopia'/>, rootElement)
