import React, { Component } from 'react';
import Burger from './Burger';
import BurgerButton from './BurgerButton';
import FavoriteItem from './FavoriteItem';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      openBurger: false,
      favoritesList: ['Lyon', 'Paris', 'Autre']
    };
  }

  openBurgerMenu = () => {
    this.setState((prevState) => {
      return { openBurger: !prevState.openBurger };
    });
  }

  closeBurgerMenu = () => {
    this.setState({ openBurger: false });
  }

  render () {
    return (
      <div className='header'>
        <BurgerButton handleClick={this.openBurgerMenu} />
        <h2 className='welcome-message'>Welcome to <strong>Weather Suggest</strong></h2>
        <img className='menu-logo-img' src={require('../images/logo.png')} alt='logo' />
        <Burger handleClick={this.closeBurgerMenu} show={this.state.openBurger} />
      </div>
    );
  }
}

export default Header;
