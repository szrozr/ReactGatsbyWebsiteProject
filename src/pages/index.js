import React from 'react';
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

// Translation Higher Order Component
import tr from '../components/language/tr.json';
import en from '../components/language/en.json';

import '../styles/index.scss';
import AboutUs from '../components/pages/aboutus';
import Contact from '../components/pages/contact';
import Design from '../components/pages/design';
import Layout from '../components/layout';
import Software from '../components/pages/software';
import Entrance from '../components/pages/entrance';
import Gorilla from '../components/aboutus-images/gorillaimage';

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
    width: 0,
    formControls: {
      name: {
        value: '',
        placeholder: 'What is your name',
      },
    },
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.isSet) {
      setLanguage(props.lang);
    }
    return { isSet: true };
  }

  componentDidMount() {
    this.setComponentDimension();
    window.addEventListener('resize', this.setComponentDimension);
    // window.addEventListener('onselect', this.setComponentHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setComponentDimension);
    // window.removeEventListener('onselect', this.setComponentHeight);
  }

  handleSetLanguage = key => () => {
    setLanguage(key);
  };

  onLeave = (origin, destination, direction) => {
    window.removeEventListener('resize', this.setComponentDimension);
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

  setComponentDimension = () => {
    // const height = Math.max(
    //   document.documentElement.clientHeight,
    //   window.innerHeight || 0,
    // );
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
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
    const { height, formControls, width } = this.state;
    const isMobile = width <= 800;
    console.log(isMobile, height, width);
    if (isMobile) {
      return (
        <div>
          <div style={{ margin: '5%', marginTop: '10%' }}>
            <div className="puente2" style={{ textTransform: 'uppercase', textAlign: 'center' }}>
              Mobile is under construction
            </div>
            <div style={{ textAlign: 'center' }}>
              We are hiring developers and designers! Send us your CV to
              <a href="mailto: jobs@puentedev.io"> jobs@puentedev.io</a>
            </div>
          </div>
          <Gorilla clasName="mobileGorila" />
        </div>
      );
    }
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
                      <Entrance tasarim={t('tasarim')} yazilim={t('yazilim')} hakkimizda={t('hakkimizda')} iletisim={t('iletisim')} handle={handleMove} pagetransition={transition} onleave={designleave} logovisibility={bool} />
                    </TrackVisibility>
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
