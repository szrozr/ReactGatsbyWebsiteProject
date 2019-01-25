import React from 'react';
import { Link } from 'gatsby';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import TrackVisibility from 'react-on-screen';
import PropTypes from 'prop-types';
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from 'react-switch-lang';
import Deneme from './deneme';
import ImageLoader from './imageloaderdeneme';
import puenteAnimation from '../assets/images/entranceimages/puenteanimation.gif';


// Translation Higher Order Component
import tr from '../components/language/tr.json';
import en from '../components/language/en.json';

import LogoImage from '../components/logoImage';
import '../styles/index.scss';
import NavBar from '../components/NavBar';
import AboutUs from './aboutus';
import Contact from './contact';
import Design from './design';
import Layout from '../components/layout';
import Software from './software';
import Entrance1 from './entrance';


const bool = true;
let transition = false;
let entranceleave = false;
let aboutusleave = false;
let contactleave = false;
let designleave = false;

// Do this two lines only when setting up the application
setTranslations({ en, tr });
setDefaultLanguage('en');

// If you want to remember selected language
setLanguageCookie('language', { path: '/', maxAge: 157680000 });

class IndexPage extends React.Component {
  state = {
    height: 600,
    formControls: {
      name: {
        value: '',
        placeholder: 'What is your name',
      },
    },
  }

  componentDidMount() {
    this.setComponentHeight();
    window.addEventListener('resize', this.setComponentHeight);
    // window.addEventListener('onselect', this.setComponentHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setComponentHeight);
    // window.removeEventListener('onselect', this.setComponentHeight);
  }

  handleSetLanguage = key => () => {
    setLanguage(key);
  };

  onLeave = (origin, destination, direction) => {
    window.removeEventListener('resize', this.setComponentHeight);
    entranceleave = false;
    aboutusleave = false;
    contactleave = false;
    designleave = false;
    transition = false;
    if (origin.index === 0) {
      entranceleave = true;
      aboutusleave = false;
      contactleave = false;
      designleave = false;
    }
    if (origin.index === 1) {
      designleave = true;
      entranceleave = false;
      aboutusleave = false;
      contactleave = false;
    }
    if (origin.index === 2) {
      aboutusleave = true;
      contactleave = false;
      designleave = false;
      entranceleave = false;
    }
    if (origin.index === 3) {
      contactleave = true;
      designleave = false;
      entranceleave = false;
      aboutusleave = false;
    }
  }

  setComponentHeight = () => {
    const height = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    );
    this.setState({
      height,
    });
  }


  changeHandler = (event) => {
    const { name } = event;
    const { value } = event;

    this.setState({
      formControls: {
        [name]: value,
      },
    });
  }

  render() {
    const { t } = this.props;
    const { height, formControls } = this.state;
    const ComponentToTrack = ({ isVisible }) => {
      const red = 'red';
      const style = {
        background: isVisible ? red : 'blue',
      };
      return <div style={style}>Hello</div>;
    };
    ComponentToTrack.propTypes = {
      isVisible: PropTypes.bool,
    };
    ComponentToTrack.defaultProps = {
      isVisible: false,
    };
    const Entrance = ({
      isVisible,
      handle,
      pagetransition,
      onleave,
      logovisibility,
    }) => {
      let navclass = 'notonscreen';
      let animation = {};
      let visibility = { visibility: 'hidden;' };

      if (isVisible) {
        navclass = 'onscreen';
        animation = { animation: '.5s ease-in 0.5s appear 1 forwards' };
        visibility = { visibility: 'visible;' };
      }

      if (pagetransition) {
        navclass = 'onscreen';
      }
      if (onleave) {
        navclass = 'onscreen';
      }

      return (
        <React.Fragment>
          <div className="Index_LogoWrapper" style={{ height }}>
            <div id="lang">
              <button className="langpass" type="button" onClick={this.handleSetLanguage('tr')}>TR</button>
            /
              <button className="langpass" type="button" onClick={this.handleSetLanguage('en')}>EN</button>
            </div>
            <div className={navclass}><LogoImage /></div>
            <div className="Index_ContactUsWrapper">
              <div className="Index_ContactUs" style={animation}>
&nbsp;
                <a href="mailto:info@puentedev.io">info@puentedev.io</a>
              </div>
            </div>
            <div className={navclass}><NavBar logovisibility={false} hand={handle} tasarim={t('tasarim')} yazilim={t('yazilim')} hakkimizda={t('hakkimizda')} iletisim={t('iletisim')} /></div>
          </div>
        </React.Fragment>
      );
    };

    Entrance.propTypes = {
      isVisible: PropTypes.bool,
    };
    Entrance.defaultProps = {
      isVisible: false,
    };
    return (
      <Layout>
        <ReactFullpage
          parallax={false}
          fitToSection={bool}
          fitToSectionDelay
          keyboardScrolling
          autoScrolling={bool}
          scrollBar={bool}
          fadingEffect={bool}
          onLeave={this.onLeave}
          scrollingSpeed={550}
          render={({ state, fullpageApi }) => {
            const handleMove = (section) => {
              fullpageApi.moveTo(section);
              transition = true;
            };
            return (
              <ReactFullpage.Wrapper>
                <React.Fragment>
                  <div className="section">
                    <TrackVisibility>
                      <Entrance1 tasarim={t('tasarim')} yazilim={t('yazilim')} hakkimizda={t('hakkimizda')} iletisim={t('iletisim')} handle={handleMove} pagetransition={transition} onleave={designleave} logovisibility={bool} />
                    </TrackVisibility>
                    <div id="lang">
                      <button className="langpass" type="button" onClick={this.handleSetLanguage('tr')}>TR</button>
            /
                      <button className="langpass" type="button" onClick={this.handleSetLanguage('en')}>EN</button>
                    </div>
                  </div>
                  <div className="section">
                    <TrackVisibility>
                      <Design icerik={t('design.Heliotrope')} tasarim={t('tasarim')} yazilim={t('yazilim')} hakkimizda={t('hakkimizda')} iletisim={t('iletisim')} handle={handleMove} pagetransition={transition} onleave={designleave} logovisibility={bool} />
                    </TrackVisibility>
                  </div>
                  <div className="section">
                    <TrackVisibility>
                      <Software tasarim={t('tasarim')} yazilim={t('yazilim')} hakkimizda={t('hakkimizda')} iletisim={t('iletisim')} handle={handleMove} pagetransition={transition} onleave={designleave} logovisibility={bool} />
                    </TrackVisibility>
                  </div>
                  <div className="section">
                    <TrackVisibility>
                      <AboutUs tasarim={t('tasarim')} yazilim={t('yazilim')} hakkimizda={t('hakkimizda')} iletisim={t('iletisim')} handle={handleMove} pagetransition={transition} onleave={aboutusleave} logovisibility={bool} />
                    </TrackVisibility>
                  </div>
                  <div className="section">
                    <TrackVisibility>
                      <Contact tasarim={t('tasarim')} yazilim={t('yazilim')} hakkimizda={t('hakkimizda')} iletisim={t('iletisim')} handle={handleMove} pagetransition={transition} onleave={contactleave} logovisibility={bool} />
                    </TrackVisibility>
                  </div>
                </React.Fragment>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </Layout>
    );
  }
}


IndexPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(IndexPage);
