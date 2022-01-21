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
            <div className="flexnav">
                <h1>Where in the world?</h1>
                <p id="theme-switcher" onClick={toggleTheme}>{currentTheme ? <i className="fas fa-moon"></i> : <i className="far fa-moon"></i>}Dark Mode</p>
            </div>
        </nav>);
}
