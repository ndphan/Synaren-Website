import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DummyCard extends PureComponent {
  render() {
    return <div></div>
  }
}

DummyCard.propTypes = {
  index: PropTypes.number,
  isVisible: PropTypes.bool
};

DummyCard.defaultProps = {};

export default DummyCard;
