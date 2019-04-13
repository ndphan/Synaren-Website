import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SynarenCard from '../Shared/SynarenCard';
import { Iframe } from './WebGlCard.styles';
//import { Test } from './WebGlCard.styles';

class WebGlCard extends PureComponent {
  render() {
    const props = this.props;
    return (
      <SynarenCard
        isImageCardReverse={false}
        isImageCard={true}
        descriptionStyle={{ padding: "50px", zIndex: "2" }}
        contentStyle={{ height: "500px", marginTop: "-50px", marginBottom: "-4px", zIndex: "1" }}
        content
        content={
          props.isVisible ?
            <Iframe
              allowFullScreen
              allowvr="no"
              frameBorder="0"
              scrolling="no"
              src="https://synaren.com/game/"
            />
            : undefined
        }
        header="3D JavaScript Engine (WebGL)"
        description="Create 3D rich immersive applications using this JavaScript OpenGL Engine.&#10;&#13;Click on the ground to move."
        {...this.props}
      />
    );
  }
}

WebGlCard.propTypes = {
  index: PropTypes.number,
  isVisible: PropTypes.bool
};

WebGlCard.defaultProps = {};

export default WebGlCard;
