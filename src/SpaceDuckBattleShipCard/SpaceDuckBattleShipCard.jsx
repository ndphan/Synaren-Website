import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SynarenCard from '../Shared/SynarenCard';
import { Iframe } from './SpaceDuckBattleShipCard.styles';

class SpaceDuckBattleShipCard extends PureComponent {
  render() {
    const props = this.props;
    return (
      <SynarenCard
        isReverse={false}
        isDelayedLoad={true}
        descriptionStyle={{ padding: "50px" }}
        content={
          props.isVisible ?
            <Iframe
              allowFullScreen
              allowvr="no"
              frameBorder="0"
              scrolling="no"
              src="https://synaren.com/space-duck2/"
            />
            : undefined
        }
        header="Space Duck Battleship"
        description="A turn-based battleship strategy game. Take turns to shoot each other with projectiles to see who comes out on top! Test your skills when shooting the projectile as it is affected by gravity physics."
        {...this.props}
      />
    );
  }
}

SpaceDuckBattleShipCard.propTypes = {
  index: PropTypes.number,
  isVisible: PropTypes.bool
};

SpaceDuckBattleShipCard.defaultProps = {};

export default SpaceDuckBattleShipCard;
