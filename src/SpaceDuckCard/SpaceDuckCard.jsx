import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SynarenCard from '../Shared/SynarenCard';
import { Iframe } from './SpaceDuckCard.styles';

class SpaceDuckCard extends PureComponent {
  render() {
    return (
      <SynarenCard
        isImageCardReverse={true}
        isImageCard={true}
        descriptionStyle={{ padding: "50px" }}
        contentStyle={{height: "400px"}}
        content
        content={
          <Iframe
          allowFullScreen
          allowvr="no"
          frameBorder="0"
          scrolling="no"
          src="https://synaren.com/space-duck/"
        />
        }
        header="Space Duck"
        description="Space Duck is an arcade obstacle avoidance game where you avoid asteroids.The best way to survive is to follow Guardian Duck who can destroy the asteroids with lasers."
        {...this.props}
      />
    );
  }
}

SpaceDuckCard.propTypes = {
  index: PropTypes.number
};

SpaceDuckCard.defaultProps = {};

export default SpaceDuckCard;
