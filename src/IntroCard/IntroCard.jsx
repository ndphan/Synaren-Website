import React, { PureComponent } from 'react';
import { Subtext, BrandSupport, Blinker, NamImage, Subtle } from './IntroCard.styles';
import PropTypes from 'prop-types';
import SynarenCard from '../Shared/SynarenCard';

class IntroCard extends PureComponent {
  render() {
    return (
      <SynarenCard
        description={
          <div>
            <br/>
            <NamImage />
            <div>Nam Phan</div>
            <Subtle>Builder, Creator</Subtle>
            <br/>
            Connect with me on <a href="https://www.linkedin.com/in/ndphan/">Linkedin</a>.
            <br/>
            Find anything you like?
          </div>
        }
        content={
          <Subtext>
            Technology to drive change<Blinker>.</Blinker>
            <BrandSupport><span style={{ color: "whitesmoke" }}>Challenging</span> convention.</BrandSupport>
          </Subtext>
        }
        contentStyle={{
          background: "#252839",
          paddingTop: "95px"
        }}
        {...this.props}
      />

    );
  }
}

IntroCard.propTypes = {
  index: PropTypes.number
};
IntroCard.defaultProps = {};

export default IntroCard;
