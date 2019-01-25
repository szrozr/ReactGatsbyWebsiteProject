import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';


class Deneme extends React.Component {
  componentDidMount() {
    // window.addEventListener('onselect', this.setComponentHeight);
  }

  componentWillUnmount() {
  // window.removeEventListener('onselect', this.setComponentHeight);
  }

  render() {
    const {
      handle, tasarim, yazilim, hakkimizda, iletisim, pagetransition,
    } = this.props;
    const handleFunc = () => {
      handle();
    };
    return (
      <div>
        <br />
        <br />
        <br />
        <button type="button" onClick={() => handleFunc()}>
              Move down
        </button>
      </div>
    );
  }
}

Deneme.propTypes = {
  handle: PropTypes.func.isRequired,
  tasarim: PropTypes.string.isRequired,
  yazilim: PropTypes.string.isRequired,
  hakkimizda: PropTypes.string.isRequired,
  iletisim: PropTypes.string.isRequired,
  pagetransition: PropTypes.bool.isRequired,
};

export default Deneme;
