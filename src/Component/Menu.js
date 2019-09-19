import React from 'react';
//import searchIcon from './search-icon.png';
class Menu extends React.Component{

	 render() {
        return (
        	<div className="container center">
        <nav className="menu">
            <h2 className="menu__logo">Products</h2>

            <div className="menu__right">
                <ul className="menu__list">
                    <li className="menu__list-item"><a className="menu__link menu__link--active" href="http://localhost:3000/">Kvinna</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">Man</a></li>
                    
                    
                </ul>

                <button  className="menu__search-button"></button>

                <form className="menu__search-form hide" method="POST">
                    <input className="menu__search-input" placeholder="Type and hit enter" />
                </form>
            </div>
        </nav>
    </div>


        );
    }
}

export default Menu;