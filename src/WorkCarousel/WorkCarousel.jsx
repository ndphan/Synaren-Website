import React, { PureComponent } from 'react';
import * as Style from './WorkCarousel.styles';
import MovskivrCard from '../MovskivrCard';
import IntroCard from '../IntroCard';
import FriendWorkCard from '../FriendWorkCard';
import SpaceDuckCard from '../SpaceDuckCard';
import WebGlCard from '../WebGlCard';
import CloudChatCard from '../CloudChatCard';
import TrackVisibility from 'react-on-screen';
import SpaceDuckBattleShipCard from '../SpaceDuckBattleShipCard';
import DummyCard from '../DummyCard';

const componentsToRender = [
  IntroCard,
  MovskivrCard,
  SpaceDuckBattleShipCard,
  DummyCard,
  FriendWorkCard,
  CloudChatCard,
  SpaceDuckCard,
  WebGlCard
]

class WorkCarousel extends PureComponent {
  render() {
    return (
      <Style.CarouselContainer>
        <Style.CarouselItemContainer>
          {componentsToRender.map((Section, index) => (
            <Style.CarouselItem key={index}>
              <TrackVisibility partialVisibility>
                <Section index={index} />
              </TrackVisibility>
            </Style.CarouselItem>
          ))}
        </Style.CarouselItemContainer>
      </Style.CarouselContainer>
    );
  }
}

WorkCarousel.propTypes = {};
WorkCarousel.defaultProps = {};

export default WorkCarousel;
