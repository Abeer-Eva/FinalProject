import React from 'react';


class Navigation extends React.Component{
    render() {
        return (
            <div className="menu__right">
                <ul className="menu__list">
                    <li className="menu__list-item"><a className="menu__link menu__link--active" href="#omOss.js">Start Sida</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">Om Oss</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">Konto</a></li>
                    
                </ul>
           
      </div>
        );
    }
}

export default Navigation;