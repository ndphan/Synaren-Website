import React, { PureComponent } from 'react';
import * as Style from './WorkCarousel.styles';
import MovskivrCard from '../MovskivrCard';
import IntroCard from '../IntroCard';
import FriendWorkCard from '../FriendWorkCard';
import SpaceDuckCard from '../SpaceDuckCard';
import WebGlCard from '../WebGlCard';
import CloudChatCard from '../CloudChatCard';

// const componentsToRender = [
  
// ]

class WorkCarousel extends PureComponent {
  render() {
    return (
      <Style.CarouselContainer>
        <Style.CarouselItemContainer>
          <Style.CarouselItem>
            <IntroCard index={2}/>
          </Style.CarouselItem>
          <Style.CarouselItem>
            <MovskivrCard index={3} />
          </Style.CarouselItem>
          <Style.CarouselItem>
            <FriendWorkCard index={4} />
          </Style.CarouselItem>
          <Style.CarouselItem>
            <SpaceDuckCard index={5} />
          </Style.CarouselItem>
          <Style.CarouselItem>
            <CloudChatCard index={6} />
          </Style.CarouselItem>
          <Style.CarouselItem>
            <WebGlCard index={7} />
          </Style.CarouselItem>
        </Style.CarouselItemContainer>
      </Style.CarouselContainer>
    );
  }
}

WorkCarousel.propTypes = {};
WorkCarousel.defaultProps = {};

export default WorkCarousel;
