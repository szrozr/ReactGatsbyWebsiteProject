import React from 'react';
import PropTypes from 'prop-types';
import puenteAnimation from '../assets/images/entranceimages/puenteanimation2.gif';
import NavBar from '../components/NavBar';

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
    return (
      <div className={clasName} style={{ height: '100%' }}>
        <NavBar
          logovisibility={false}
          hand={handle}
          tasarim={tasarim}
          yazilim={yazilim}
          hakkimizda={hakkimizda}
          iletisim={iletisim}
          activeId=""
        />
        <div id="animationdiv"><img id="peunteanimation" src={puenteAnimation} alt="" /></div>
      </div>
    );
  }
}

Entrance.propTypes = {
  tasarim: PropTypes.string.isRequired,
  yazilim: PropTypes.string.isRequired,
  hakkimizda: PropTypes.string.isRequired,
  iletisim: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  pagetransition: PropTypes.bool.isRequired,
  onleave: PropTypes.bool.isRequired,
};

export default Entrance;
