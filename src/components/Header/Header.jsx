import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import './Header.scss'

export default function Header() {

    const [currentTheme,setCurrentTheme ] = React.useState(false)
    
    const toggleTheme = () => {
        setCurrentTheme(!currentTheme);
        switchTheme()
    };
   
    function switchTheme(){
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', 'light');
        }
        else {        
            document.documentElement.setAttribute('data-theme', 'dark');
        }    
    }

  return( 
        <nav>
            <h1>Where in the world?</h1>
            <p id="theme-switcher" onClick={toggleTheme}>Dark Mode</p>
      
        </nav>);
}
