import React from 'react';
import PropTypes from 'prop-types';
import {
  setLanguage,
  translate,
  getLanguage,
} from 'react-switch-lang';
import ReactHtmlParser from 'react-html-parser';
import NavBar from '../NavBar';

import Gorilla from '../software-images/sw-gorilla';
import SoftwareLogo from '../software-images/software-logo';
import '../../styles/software.scss';


class Software extends React.Component {
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
      tasarim, yazilim, hakkimizda, iletisim, isVisible, handle, pagetransition, onleave, t,
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
    const enClassName = getLanguage() === 'en' ? 'is-active langpass' : 'langpass';
    const trClassName = getLanguage() === 'tr' ? 'is-active langpass' : 'langpass';

    return (
      <div className={clasName} style={{ height: '100%' }}>
        <div>
          <NavBar
            isFooter={false}
            tasarim={tasarim}
            yazilim={yazilim}
            hakkimizda={hakkimizda}
            iletisim={iletisim}
            activeId="yazilim"
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
          className="softwareContainer"
          style={{
            height: '100%',
          }}
        >
          <div id="softwaregorilladiv"><Gorilla /></div>
          <div id="softwareinlinecontainer">
            <div className="software" id="softwareh1">
              &lt;h1&gt;
              {t('software.baslik')}
              &lt;/h1&gt;
            </div>
            <p className="softwarep">
              <br />
              &emsp;
              {ReactHtmlParser(t('software.paragraf1'))}
            </p>
            <p className="softwarep">
              &emsp;
              {ReactHtmlParser(t('software.paragraf2'))}
            </p>
            <p className="softwarep">
              &emsp;
              {ReactHtmlParser(t('software.paragraf3'))}
            </p>
            <div className="tech-logo">
              <SoftwareLogo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Software.propTypes = {
  tasarim: PropTypes.string.isRequired,
  yazilim: PropTypes.string.isRequired,
  hakkimizda: PropTypes.string.isRequired,
  iletisim: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  handle: PropTypes.func.isRequired,
  pagetransition: PropTypes.bool.isRequired,
  onleave: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate(Software);
