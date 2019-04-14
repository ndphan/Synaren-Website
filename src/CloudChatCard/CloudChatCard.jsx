import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SynarenCard from '../Shared/SynarenCard';
import { Iframe } from './CloudChatCard.styles';

class CloudChatCard extends PureComponent {
  render() {
    return (
      <SynarenCard
        isImageCardReverse={false}
        isImageCard={true}
        descriptionStyle={{ padding: "50px", zIndex:"2" }}
        contentStyle={{height: "680px", marginBottom:"0", marginTop:"-48px"}}
        content
        content={
          <Iframe
          allowFullScreen
          allowvr="no"
          frameBorder="0"
          scrolling="no"
          src="https://www.synaren.com/synaren-chat/"
        />
        }
        header="Cloud Chat"
        description="Create your own chat room and invite people by link. Chat sessions are automatically destroyed after a few hours of inactivity."
        {...this.props}
      />
    );
  }
}

CloudChatCard.propTypes = {
  index: PropTypes.number
};

CloudChatCard.defaultProps = {};

export default CloudChatCard;
