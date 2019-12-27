import React, { PureComponent } from 'react';
import * as Style from './MovskivrCard.styles';
import SynarenCard from '../Shared/SynarenCard/SynarenCard';
import PropTypes from 'prop-types';

class MovskivrCard extends PureComponent {
  render() {
    return (
      <SynarenCard
        isReverse={true}
        content={
          <Style.Iframe
            allowFullScreen
            allowvr="yes"
            frameBorder="0"
            scrolling="no"
            src="https://www.synaren.com/movskivr-static/static/v2/index.html?accessToken=SH1Jy2B2XS7Qm1R2uCOTh6jAmb4TuLhoZW8aFyg9&amp;propertyId=0&amp;ref=synaren"
          />
        }
        header={<a target="_blank" rel="noopener noreferrer" className="uk-link-heading" href={"https://www.movskivr.com.au/"}>MovskiVR</a>}
        link={
          <a target="_blank" rel="noopener noreferrer" className="uk-link-heading" style={{ marginLeft: "4px", transform: "translateY(-10%)", color: "white" }} href={"https://www.movskivr.com.au/"} uk-icon="link">
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="link"><path fill="none" stroke="#000" strokeWidth="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"></path><path fill="none" stroke="#000" strokeWidth="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"></path><path fill="none" stroke="#000" strokeWidth="1.1" d="M7.925,11.875 L11.925,7.975"></path></svg>
          </a>
        }
        description="When searching online for the perfect home to buy or rent, have you ever wondered what it actually looks like in 360°? With MovskiVR you will be instantly transported to any room of your choice and have the experience of being there."
        {...this.props}
      />
    );
  }
}

MovskivrCard.propTypes = {
  index: PropTypes.number
};
MovskivrCard.defaultProps = {};

export default MovskivrCard;
