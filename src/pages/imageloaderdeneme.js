import React from 'react';
import ImageLoader from 'react-load-image';
import gorilAnimation from '../assets/images/entranceimages/gorillagif.gif';
import '../styles/index.scss';
import Gify from '../assets/images/entranceimages/giphy.gif';

class ImageLoaderDeneme extends React.Component {
  componentDidMount() {
    // window.addEventListener('onselect', this.setComponentHeight);
  }

  componentWillUnmount() {
  // window.removeEventListener('onselect', this.setComponentHeight);
  }

  render() {
    const preloader = () => {
      return <img src={Gify} alt="loading" />;
    };
    return (
      <ImageLoader
        src={gorilAnimation}
        wrapper={React.createFactory('div')}
        preloader={preloader}
      >
          Image load failed!
      </ImageLoader>
    );
  }
}

export default ImageLoaderDeneme;
