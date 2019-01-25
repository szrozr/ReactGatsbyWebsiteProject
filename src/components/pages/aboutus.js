import React from 'react';
import PropTypes from 'prop-types';
import {
  translate,
} from 'react-switch-lang';
import ReactHtmlParser from 'react-html-parser';
import NavBar from '../NavBar';
import AboutusLogo from '../aboutus-images/aboutuslogo';
import Gorilla from '../aboutus-images/gorillaimage';
import '../NavBar.scss';
import '../../styles/aboutus.scss';

class AboutUs extends React.Component {
  componentDidMount() {
    // window.addEventListener('onselect', this.setComponentHeight);
  }

  componentWillUnmount() {
  // window.removeEventListener('onselect', this.setComponentHeight);
  }

  render() {
    const {
      tasarim, yazilim, hakkimizda, iletisim, isVisible, handle, pagetransition, onleave, t,
    } = this.props;
    let clasName = 'notonscreen';
    let gorilClass = 'AboutUsGorilla';
    let gorilDiv = 'aboutusgorilladiv';

    if (isVisible) {
      // gorilDiv = 'aboutusgorilladiv2';
      clasName = 'onscreen';
      gorilClass = 'AboutUsGorilla2';
    }
    if (pagetransition) {
      gorilDiv = 'aboutusgorilladiv';
      clasName = 'onscreen';
      gorilClass = 'AboutUsGorillaVisible';
    }
    if (onleave) {
      clasName = 'onscreen';
    }
    return (
      <React.Fragment>
        <div className={clasName} style={{ height: '100%' }}>
          <div>
            <NavBar
              isFooter={false}
              tasarim={tasarim}
              yazilim={yazilim}
              hakkimizda={hakkimizda}
              iletisim={iletisim}
              activeId="hakkimizda"
              hand={handle}
            />
          </div>
          <div
            style={{
              height: '100%',
            }}
            className="aboutuscontainer"
          >
            <div id={gorilDiv}><Gorilla clasName={gorilClass} /></div>
            <div id="aboutusinlinecontainer">
              <div className="hakkimizda" id="hakkimizdah1">&lt;h1&gt;hakkımızda&lt;/h1&gt;</div>
              <p className="aboutusp fp">
                &emsp;
                {ReactHtmlParser(t('aboutus.paragraf1'))}
              </p>
              <p className="aboutusp">
              &emsp;
                {ReactHtmlParser(t('aboutus.paragraf2'))}
              </p>
              <p className="aboutusp">
              &emsp;
                {ReactHtmlParser(t('aboutus.paragraf3'))}
              </p>
              <div>
                <AboutusLogo />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

AboutUs.defaultProps = {
  tasarim: '',
  hakkimizda: '',
  yazilim: '',
  iletisim: '',
  isVisible: false,
};


AboutUs.propTypes = {
  tasarim: PropTypes.string,
  yazilim: PropTypes.string,
  hakkimizda: PropTypes.string,
  iletisim: PropTypes.string,
  isVisible: PropTypes.bool,
  handle: PropTypes.func.isRequired,
  pagetransition: PropTypes.bool.isRequired,
  onleave: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate(AboutUs);
