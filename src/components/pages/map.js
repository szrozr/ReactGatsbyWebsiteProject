import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import Map from '../contactus-images/maplocation';

const AnyReactComponent = ({ text }) => <div id="mapicon"><Map /></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.890343,
      lng: 32.855044,
    },
    zoom: 16,
  };

  componentDidMount() {
    // window.addEventListener('onselect', this.setComponentHeight);
  }

  componentWillUnmount() {
  // window.removeEventListener('onselect', this.setComponentHeight);
  }

  render() {
    const { center, zoom } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '42vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCUPFib4yUVlmvC794Ycp7FJFuJcN5x5gM' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={39.890343}
            lng={32.855044}
            text="Puente Yazılım"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

AnyReactComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

SimpleMap.propTypes = {
  center: PropTypes.shape(),
  zoom: PropTypes.number,
};

export default SimpleMap;
