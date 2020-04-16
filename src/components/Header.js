import React, { Component } from 'react';
import Burger from './burger'
import BurgerButton from './BurgerButton';
import Favorit from './Favorit';

class Header extends Component {
    state = {
        openBurger: false
      };
  
    openBurgerMenu = () => {
      this.setState((prevState) => {
        return {openBurger: !prevState.openBurger}
      });
    }
  
    closeBurgerMenu = () => {
      this.setState({openBurger: false});
    }

    render() {
        return (
            <div className="header">
               <Favorit />

            <BurgerButton handleClick={this.openBurgerMenu} />
              <h2>Welcome to <strong>Weather Suggest</strong></h2>
              <img className="menu-logo-img" src={require('../images/logo.png')} alt="logo" />
              <Burger handleClick={this.closeBurgerMenu} show={this.state.openBurger} />
            </div>
        );
    }
}

export default Header;