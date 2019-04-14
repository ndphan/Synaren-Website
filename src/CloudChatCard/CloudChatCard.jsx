import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SynarenCard from '../Shared/SynarenCard';
import { Iframe } from './CloudChatCard.styles';

function screenWidth() {
  const w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;
  return x;
}

class CloudChatCard extends Component {
  state = {
    screenWidth: screenWidth(),
    throttle: undefined
  };

  updateScreenWidth = () => {
    const { throttle } = this.state;
    if(throttle){
      clearTimeout(throttle);
    }
    const newThrottle = setTimeout(_ => this.setState({screenWidth: screenWidth()}), 500);
    this.setState({ throttle: newThrottle });
  }

  componentDidMount(){
    this.updateScreenWidth();
    window.addEventListener("resize", this.updateScreenWidth);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateScreenWidth);
  }

  render() {
    const { screenWidth } = this.state;
    const screenContentWidth = screenWidth > 568 ? "680px" : "900px";
    return (
      <SynarenCard
        isImageCardReverse={false}
        isImageCard={true}
        descriptionStyle={{ padding: "50px", zIndex:"2" }}
        contentStyle={{height: screenContentWidth, marginBottom:"0", marginTop:"-48px"}}
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
