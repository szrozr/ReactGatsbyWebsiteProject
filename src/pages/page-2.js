import React from 'react';
import TrackVisibility from 'react-on-screen';
import PropTypes from 'prop-types';
import ReactFullpage from '@fullpage/react-fullpage';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import LogoImage from '../components/logoImage';


const ComponentToTrack = ({ isVisible }) => {
  const style = {
    background: isVisible ? 'red' : 'blue',
  };
  return <div style={style}>Hello</div>;
};

const YourApp = () => {
  return (
    <ReactFullpage
      refresh
      navigation
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <React.Fragment>
              <div className="section">
                <p>Section 1</p>
              </div>
            </React.Fragment>
            <React.Fragment>
              <div className="section">
                <div className="Index_LogoWrapper">
                  <LogoImage />
                  <div className="Index_ContactUsWrapper">
                    <div className="Index_ContactUs">
                For more information contact us at&nbsp;
                      <a href="mailto:info@puentedev.io">info@puentedev.io</a>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
            <React.Fragment>
              <div className="section">
                <TrackVisibility>
                  <ComponentToTrack />
                </TrackVisibility>
              </div>
            </React.Fragment>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

ComponentToTrack.propTypes = {
  isVisible: PropTypes.bool,
};
ComponentToTrack.defaultProps = {
  isVisible: false,
};

export default YourApp;
