import React from 'react';
import PropTypes from 'prop-types';
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from 'react-switch-lang';
import ReactHtmlParser from 'react-html-parser';
import TextInput from '../components/TextInput';
import TextArea from '../components/Textarea';
import NavBar from '../components/NavBar';
import Logo from '../components/plogo';
import '../styles/design.scss';
import '../styles/software.scss';
import DesignGorilla from '../components/design-images/design-gorilla';
import Adobe from '../components/design-images/adobe';
import SubLogo from '../components/design-images/designlogo';

class Design extends React.Component {
  componentDidMount() {
    // window.addEventListener('onselect', this.setComponentHeight);
  }

  componentWillUnmount() {
  // window.removeEventListener('onselect', this.setComponentHeight);
  }


  render() {
    const {
      tasarim, yazilim, hakkimizda, iletisim, handle, pagetransition, onleave, t,
    } = this.props;
    let clasname = 'notonscreen';
    const { isVisible } = this.props;
    if (isVisible) {
      clasname = 'onscreen';
    }
    if (pagetransition) {
      clasname = 'onscreen';
    }
    if (onleave) {
      clasname = 'onscreen';
    }
    return (
      <React.Fragment>
        <div className={clasname} style={{ height: '100%' }}>
          <div>
            <NavBar
              isFooter={false}
              tasarim={tasarim}
              yazilim={yazilim}
              hakkimizda={hakkimizda}
              iletisim={iletisim}
              activeId="tasarim"
              hand={handle}
            />
          </div>
          <div
            className="designContainer"
            style={{
              height: '100%',
            }}
          >
            <div id="designgorilladiv"><DesignGorilla /></div>
            <div id="designinlinecontainer">
              <div className="tasarim" id="tasarimh1">&lt;h1&gt;tasarım&lt;/h1&gt;</div>
              <p className="designp">
                <br />
              &emsp;
                {ReactHtmlParser(t('design.paragraf1'))}
              </p>
              <p className="designp">
              &emsp;
                {ReactHtmlParser(t('design.paragraf2'))}
              </p>
              <p className="designp">
              &emsp;
                {ReactHtmlParser(t('design.paragraf3'))}
              </p>
              <p className="designp">
              &emsp;
                {ReactHtmlParser(t('design.paragraf4'))}
              </p>
              <div className="bottomLogo">
                <SubLogo />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Design.propTypes = {
  tasarim: PropTypes.string.isRequired,
  yazilim: PropTypes.string.isRequired,
  hakkimizda: PropTypes.string.isRequired,
  iletisim: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  pagetransition: PropTypes.bool.isRequired,
  onleave: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate(Design);