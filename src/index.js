import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'

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
      <div className='UserName'>
          <h1>
            {props.firstName}
            {props.lastName}
          </h1>
          <small>{props.country}</small>
      </div>
    )
  }

  const Header = (props) =>{
    return (
      <header className='header'>
        <nav>
          <ul><li><a href="#.com">{props.Home}</a></li></ul>
          <ul><li><a href="#.com">{props.About}</a></li></ul>
          <ul><li><a href="#.com">{props.Contact}</a></li></ul>
          <ul><li><a href="#.com">{props.Preferences}</a></li></ul>
        </nav>
      </header>
        
    )
  } 

  const Skills = (props) =>{
    return (
      <div className='skills'>
        <ul>
          <li>
          {props.Skills}
          </li>
        </ul>
      </div>
    )
  }

  const Click = (props) =>{
      const greetPeople = () =>{
        alert('welcome to 30 days of javascript')
      }
      return (
        <div>
          <button onClick={greetPeople}>Greet People</button>
        </div>
      )
  }


  const App = () =>{
    return(
      <div>
          {<User firstName= 'Prince' lastName = 'Hope'  country = 'Ethiopia'/>}
          {<Header Home = 'Home' About = 'About' Contact ='Contact' Preferences = 'Preferences'/>}
          {<Skills Skills={['Html', ' ', 'Css' , ' ', 'Javascript' ,' ','React']}/>}
          {<Click/>  }
      </div>
      
    )
  }

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement)
