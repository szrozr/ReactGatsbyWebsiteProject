import React from 'react';

import Layout from '../components/layout';
import LogoImage from '../components/logoImage';
import '../styles/index.scss';

class IndexPage extends React.PureComponent {
  state = {
    height: 600,
  }

  componentDidMount() {
    this.setComponentHeight();
    window.addEventListener('resize', this.setComponentHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setComponentHeight);
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

  render() {
    const { height } = this.state;
    return (
      <Layout>
        <div className="Index_LogoWrapper" style={{ height }}>
          <LogoImage />
          <div className="Index_ContactUsWrapper">
            <div className="Index_ContactUs">
              For more information contact us at&nbsp;
              <a href="mailto:info@puentedev.io">info@puentedev.io</a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
