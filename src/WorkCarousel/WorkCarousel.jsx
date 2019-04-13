import React, { PureComponent } from 'react';
import * as Style from './WorkCarousel.styles';
import MovskivrCard from '../MovskivrCard';
import IntroCard from '../IntroCard';

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
            <MovskivrCard index={4} />
          </Style.CarouselItem>
        </Style.CarouselItemContainer>
      </Style.CarouselContainer>
    );
  }
}

WorkCarousel.propTypes = {};
WorkCarousel.defaultProps = {};

export default WorkCarousel;
