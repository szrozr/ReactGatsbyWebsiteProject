import React from 'react';
import PropTypes from 'prop-types';
import {
  setLanguage,
  translate,
  getLanguage,
} from 'react-switch-lang';
import ReactHtmlParser from 'react-html-parser';
import NavBar from '../NavBar';
import Logo from '../plogo';
import Location from '../contactus-images/location';
import Phone from '../contactus-images/phone';
import Fax from '../contactus-images/fax';
import Web from '../contactus-images/web';
import Mail from '../contactus-images/mail';
import '../../styles/contactus.scss';
import Map from './map';

class Contact extends React.Component {
  state = {
    formControls: {
      isim: {
        val: '',
        placeholder: 'İsim *',
      },
      soyisim: {
        val: '',
        placeholder: 'Soyisim *',
      },
      firma: {
        val: '',
        placeholder: 'Çalıştığınız Firma',
      },
      gorev: {
        val: '',
        placeholder: 'Göreviniz',
      },
      telefon: {
        val: '',
        placeholder: 'Telefon *',
      },
      email: {
        val: '',
        placeholder: 'Email *',
      },
      mesaj: {
        val: '',
        placeholder: 'Mesajınız *',
      },
    },
  }

  componentDidMount() {
    // window.addEventListener('onselect', this.setComponentHeight);
  }

  componentWillUnmount() {
    // window.removeEventListener('onselect', this.setComponentHeight);
  }

  handleSetLanguage = key => () => {
    setLanguage(key);
  };

  changeHandler = (event) => {
    const { formControls } = this.state;
    const { name } = event.target;
    const { value } = event.target;
    let ph = 'empty';

    if (name === 'isim') {
      ph = 'İsim *';
    }
    if (name === 'soyisim') {
      ph = 'Soyisim *';
    }
    if (name === 'gorev') {
      ph = 'Göreviniz';
    }
    if (name === 'mesaj') {
      ph = 'Mesajınız *';
    }
    if (name === 'email') {
      ph = 'Email *';
    }
    if (name === 'firma') {
      ph = 'Çalıştığınız Firma';
    }
    if (name === 'telefon') {
      ph = 'Telefon *';
    }

    const form = formControls;
    form[name] = { val: value, placeholder: ph };

    this.setState({
      formControls: form,
    });
  }

  render() {
    const { formControls } = this.state;
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
    const handleClick = (section) => {
      handle(section);
    };
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
              activeId="iletisim"
              hand={handleClick}
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
            className="contactContainer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <div className="contactinlinecontainer">
              <div className="paragraf">
                <p className="contactusp ilksatir">
                  &emsp;
                  &emsp;
                  {ReactHtmlParser(t('contact.paragraf1'))}
                </p>
                <p className="contactusp">
                  &emsp;
                  &emsp;
                  {ReactHtmlParser(t('contact.paragraf2'))}
                </p>
              </div>
              <div className="adresbilgileri">
                <div className="baslik">PUENTE YAZILIM & DESIGN</div>
                <div className="flex fa">
                  <div className="sembol">
                    <Location />
                  </div>
                  &nbsp;
                  <div className="icerik">
                    Aziziye Mah. Cinnah Cad. 72/15
                    Çankaya / Ankara
                  </div>
                </div>
                <div className="flex">
                  <div className="sembol">
                    <Phone />
                  </div>
                  &nbsp;
                  <div className="icerik">
                    +90 312 438 54 38
                  </div>
                </div>
                <div className="flex">
                  <div className="sembol">
                    <Fax />
                  </div>
                  &nbsp;
                  <div className="icerik">
                    +90 312 438 54 24
                  </div>
                </div>
                <div className="flex">
                  <div className="sembol">
                    <Web />
                  </div>
                  &nbsp;
                  <div className="icerik">
                    www.puentedev.io
                  </div>
                </div>
                <div className="flex">
                  <div className="sembol">
                    <Mail />
                  </div>
                  &nbsp;
                  <div className="icerik">
                    info@puentedev.io
                  </div>
                </div>
              </div>
            </div>
            <div id="map"><Map /></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Contact.defaultProps = {
  tasarim: '',
  yazilim: '',
  hakkimizda: '',
  iletisim: '',
  isVisible: false,
};

Contact.propTypes = {
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


export default translate(Contact);
