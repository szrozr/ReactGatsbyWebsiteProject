import React from 'react';
import PropTypes from 'prop-types';
import {
  setLanguage,
  translate,
  getLanguage,
} from 'react-switch-lang';

import ReactHtmlParser from 'react-html-parser';
import NavBar from '../NavBar';

import '../../styles/design.scss';

import DesignGorilla from '../design-images/designGorilla';
import SubLogo from '../design-images/designlogo';


class Design extends React.Component {
  componentDidMount() {
    // window.addEventListener('onselect', this.setComponentHeight);
  }

  componentWillUnmount() {
  // window.removeEventListener('onselect', this.setComponentHeight);
  }

  handleSetLanguage = key => () => {
    setLanguage(key);
  };


  render() {
    const {
      tasarim, yazilim, hakkimizda, iletisim, handle, pagetransition, onleave, t,
    } = this.props;
    let clasName = 'notonscreen';
    const { isVisible } = this.props;
    if (isVisible) {
      clasName = 'onscreen';
    }
    if (pagetransition) {
      clasName = 'onscreen';
    }
    if (onleave) {
      clasName = 'onscreen';
    }
    const enClassName = getLanguage() === 'en' ? 'is-active langpass' : 'langpass';
    const trClassName = getLanguage() === 'tr' ? 'is-active langpass' : 'langpass';
    return (
      <React.Fragment>
        <div className={`${clasName} hide-mobile`}>
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
          <div id="lang">
            <ul className="lang-switcher">
              <li>
                <button type="button" className={enClassName} onClick={this.handleSetLanguage('en')}>En</button>
              </li>
              <li>
                <button type="button" className={trClassName} onClick={this.handleSetLanguage('tr')}>Tr</button>
              </li>
            </ul>
          </div>
          <div
            className="designContainer"
            style={{
              height: '100%',
            }}
          >
            <div><DesignGorilla /></div>
            <div id="designinlinecontainer">
              <div className="tasarim" id="tasarimh1">
                &lt;h1&gt;
                {t('design.baslik')}
                &lt;/h1&gt;
              </div>
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
              <div className="tech-logo" style={{ width: '54%' }}>
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
