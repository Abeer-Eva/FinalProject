import React, { Component } from 'react';

export default class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
   
    return (
      <div>
        <button onClick={this.showMenu}>
        Menu
        </button>
        {
          this.state.showMenu
            ? (
              <div className="Menu">
                <button > Man  </button> 
                <button> Kvinna</button>
                <button> Barn</button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  
  }
}
