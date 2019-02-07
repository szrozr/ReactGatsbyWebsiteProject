import React from 'react';
import PropTypes from 'prop-types';
import { getLanguage } from 'react-switch-lang';
import puenteAnimation from '../../assets/images/entranceimages/homeAnimation.gif';
import NavBar from '../NavBar';

const bool = true;

class Entrance extends React.Component {
  componentDidMount() {
    // window.addEventListener('onselect', this.setComponentHeight);
  }

  componentWillUnmount() {
    // window.removeEventListener('onselect', this.setComponentHeight);
  }

  render() {
    const {
      tasarim, yazilim, hakkimizda, iletisim, isVisible, handle, pagetransition, onleave,
    } = this.props;
    let clasName = 'notonscreen';
    if (isVisible) {
      clasName = 'onscreen';
    }
    if (pagetransition) {
      clasName = 'onscreen';
    }
    if (onleave) {
      clasName = 'onscreen';
    }
    const enClassName = getLanguage() === 'en' ? 'is-active' : '';
    const trClassName = getLanguage() === 'tr' ? 'is-active' : '';
    return (
      <div
        className={clasName}
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <NavBar
          logovisibility={false}
          hand={handle}
          tasarim={tasarim}
          yazilim={yazilim}
          hakkimizda={hakkimizda}
          iletisim={iletisim}
          activeId=""
        />

        <div id="lang">
          <ul className="lang-switcher">
            <li><a href="/en" className={enClassName}>En</a></li>
            <li><a href="/tr" className={trClassName}>Tr</a></li>
          </ul>
        </div>
        <div id="animationdiv"><img id="peunteanimation" src={puenteAnimation} alt="" /></div>
      </div>
    );
  }
}

Entrance.defaultProps = {
  isVisible: false,
};

Entrance.propTypes = {
  tasarim: PropTypes.string.isRequired,
  yazilim: PropTypes.string.isRequired,
  hakkimizda: PropTypes.string.isRequired,
  iletisim: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  pagetransition: PropTypes.bool.isRequired,
  onleave: PropTypes.bool.isRequired,
};

export default Entrance;
