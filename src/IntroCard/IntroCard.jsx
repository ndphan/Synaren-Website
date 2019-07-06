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
            <div className="uk-margin-small-top">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ndphan/" uk-icon="icon: github;" className="uk-link">&#8203;</a>&nbsp;&nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/~ndphan" style={{height:"32px",width:"32px"}} className="uk-icon npm-icon uk-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="npm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"/></svg>
              </a>
            </div>
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
