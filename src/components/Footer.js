import React, { Component } from 'react';
import '../style/footer.css';
import { Link } from 'react-router-dom';
import ModalSuggestions from './ModalSuggestions';

class Footer extends Component {
  render () {
    return (
      <footer className='page-footer font-small blue'>
        <Link className='link' to='/about'>About us</Link>
        <div className='footer-copyright text-center py-3 footer-style'>© 2020 Copyright: By Wilders <i className='fas fa-heart coeur' />
          <a href='/'> WeatherSuggest</a>
        </div>
        <ModalSuggestions />
      </footer>
    );
  }
}

export default Footer;
