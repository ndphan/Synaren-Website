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
        descriptionStyle={{ padding: "70px", zIndex:"2" }}
        content={
          <Style.Iframe
            frameBorder="0"
            scrolling="yes"
            fullscreen="yes"
            src="https://games.synaren-app.com/"
          />
        }
        link={
          <a target="_blank" rel="noopener noreferrer" className="uk-link-heading" style={{ marginLeft: "4px", transform: "translateY(-10%)", color: "white" }} href={"https://games.synaren-app.com/"} uk-icon="link">
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="link"><path fill="none" stroke="#000" strokeWidth="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"></path><path fill="none" stroke="#000" strokeWidth="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"></path><path fill="none" stroke="#000" strokeWidth="1.1" d="M7.925,11.875 L11.925,7.975"></path></svg>
          </a>
        }
        header={<a target="_blank" rel="noopener noreferrer" className="uk-link-heading" href={"https://games.synaren-app.com/"}>Synaren Games</a>}
        description="Synaren Games is a website where you can play free games on your browser."
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
