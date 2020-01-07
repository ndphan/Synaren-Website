import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SynarenCard from '../Shared/SynarenCard';
import { Iframe } from './WebGlCard.styles';

class WebGlCard extends PureComponent {
  render() {
    const { isVisible } = this.props;
    return (
      <SynarenCard
        isReverse={false}
        isImageCard={true}
        isDelayedLoad={true}
        descriptionStyle={{ padding: "50px", zIndex: "2" }}
        contentStyle={{ height: "500px", marginTop: "-50px", marginBottom: "-4px", zIndex: "1" }}
        content={
          isVisible ?
            <Iframe
              allowFullScreen
              allowvr="no"
              frameBorder="0"
              scrolling="no"
              src="https://synaren.com/game/"
            />
            : undefined
        }
        header={<div style={{verticalAlign:"middle",display:"inline-block"}}>3D JavaScript Engine&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://github.com/ndphan/JavaScriptWebGL" uk-icon="icon: github;" className="uk-link">&#8203;</a></div>}
        description={<div>Create 3D rich immersive applications using this JavaScript Engine.<br/>Click on the ground to move or drag to look around.</div>}
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
