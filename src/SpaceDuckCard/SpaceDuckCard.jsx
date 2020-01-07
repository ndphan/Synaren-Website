import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SynarenCard from '../Shared/SynarenCard';
import { Iframe } from './SpaceDuckCard.styles';

class SpaceDuckCard extends PureComponent {
  render() {
    const props = this.props;
    return (
      <SynarenCard
        isReverse={true}
        isDelayedLoad={true}
        descriptionStyle={{ height: "400px", padding: "70px" }}
        contentStyle={{ height: "400px" }}
        content={
          props.isVisible ?
            <Iframe
              allowFullScreen
              allowvr="no"
              frameBorder="0"
              scrolling="no"
              src="https://synaren.com/space-duck/"
            />
            : undefined
        }
        header="Space Duck"
        description="Space Duck is an arcade obstacle avoidance game where you avoid asteroids. The best way to survive is to follow Guardian Duck who can destroy the asteroids with lasers."
        {...this.props}
      />
    );
  }
}

SpaceDuckCard.propTypes = {
  index: PropTypes.number,
  isVisible: PropTypes.bool
};

SpaceDuckCard.defaultProps = {};

export default SpaceDuckCard;
