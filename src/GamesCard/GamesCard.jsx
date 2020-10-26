import React, { PureComponent } from "react";
import * as Style from "./GamesCard.styles";
import SynarenCard from "../Shared/SynarenCard/SynarenCard";
import PropTypes from "prop-types";

class GamesCard extends PureComponent {
  render() {
    return (
      <SynarenCard
        isReverse={false}
        isImageCard={false}
        descriptionStyle={{ height: '400px', padding: "70px", zIndex:"2" }}
        contentStyle={{ height: '400px' }}
        content={
          <Style.Iframe
            frameBorder="0"
            scrolling="yes"
            fullscreen="yes"
            src="https://games.synaren-app.com/"
          />
        }
        header={<a target="_blank" rel="noopener noreferrer" className="uk-link-heading" href={"https://games.synaren-app.com/"}>Synaren Games</a>}
        description="Synareb Games is a website where you can play free games on your browser."
        {...this.props}
      />
    );
  }
}

GamesCard.propTypes = {
  index: PropTypes.number
};
GamesCard.defaultProps = {};

export default GamesCard;
