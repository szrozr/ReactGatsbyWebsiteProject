import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

// Translation Higher Order Component
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from 'react-switch-lang';
import tr from './language/tr.json';
import en from './language/en.json';
import Logo from './plogo';
import './NavBar.scss';
import '../styles/font-awesome/css/font-awesome.css';

let logoClass = '';

// Do this two lines only when setting up the application
setTranslations({ en, tr });
setDefaultLanguage('en');


// If you want to remember selected language
setLanguageCookie();


class Navbar extends React.Component {
  componentDidMount() {
    // window.addEventListener('onselect', this.setComponentHeight);
  }

  componentWillUnmount() {
  // window.removeEventListener('onselect', this.setComponentHeight);
  }

  render() {
    const {
      isFooter, activeId, myFunction, tasarim, yazilim, hakkimizda, iletisim, hand, logovisibility,
    } = this.props;
    const navbarStyle = isFooter ? 'footer' : 'header';
    if (logovisibility) {
      logoClass = 'LogoImage';
    }
    if (!logovisibility) {
      logoClass = 'LogoImageHidden';
    }
    return (
      <div className={`navbar topnav ${navbarStyle}`} id="myTopnav">
        <button className="LogoButton" type="button" onClick={() => hand(1)}>
          <div><Logo clasName={logoClass} /></div>
        </button>
        <button type="button" className={`navitem ${activeId === 'tasarim' ? 'active' : ''}`} id="tasarimid" onClick={() => hand(2)}>
          <span>
            <div>{ReactHtmlParser(tasarim)}</div>
          </span>
        </button>
        <button type="button" className={`navitem ${activeId === 'yazilim' ? 'active' : ''}`} id="yazilim" onClick={() => hand(3)}>
          <span>
            {yazilim}
          </span>
        </button>
        <button type="button" className={`navitem ${activeId === 'hakkimizda' ? 'active' : ''}`} id="hakkimizda" onClick={() => hand(4)}>
          <span>
            {hakkimizda}
          </span>
        </button>
        <button type="button" className={`navitem ${activeId === 'iletisim' ? 'active' : ''}`} id="iletisim" onClick={() => hand(5)}>
          <span>
            {iletisim}
          </span>
        </button>

        <button type="button" className="icon" onClick={myFunction}>
          <i className="fa fa-bars" />
        </button>
      </div>
    );
  }
}

Navbar.defaultProps = {
  isFooter: true,
  activeId: '',
  myFunction: null,
  tasarim: '',
  hakkimizda: '',
  yazilim: '',
  iletisim: '',
  logovisibility: true,
};


Navbar.propTypes = {
  isFooter: PropTypes.bool,
  activeId: PropTypes.string,
  myFunction: PropTypes.func,
  tasarim: PropTypes.string,
  yazilim: PropTypes.string,
  hakkimizda: PropTypes.string,
  iletisim: PropTypes.string,
  hand: PropTypes.func.isRequired,
  logovisibility: PropTypes.bool,
};

export default Navbar;
