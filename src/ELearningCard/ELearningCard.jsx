import React, { PureComponent } from "react";
import * as Style from "./ELearningCard.styles";
import SynarenCard from "../Shared/SynarenCard/SynarenCard";
import PropTypes from "prop-types";

class ELearningCard extends PureComponent {
  render() {
    return (
      <SynarenCard
        isReverse={false}
        isImageCard={true}
        contentStyle={{ height: "450px" }}
        content={
          <>
            <Style.HeroOverlay>Content Output</Style.HeroOverlay>
            <Style.Iframe
              style={{ height: "450px", width: "620px", margin: "auto" }}
              frameBorder="0"
              scrolling="no"
              fullscreen="yes"
              src="https://www.synaren.com/elearning/reader/v2/?content=aHR0cHM6Ly9zeW5hcmVuLWFwcC5jb20vZUxlYXJuaW5nL21hc3Rlci1leGFtcGxlLmpzb24="
            />
          </>
        }
        header={
          <>
            <div>eLearning</div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="uk-button uk-button-small uk-button-secondary"
              href={"https://www.synaren.com/elearning/v2/"}
            >
                Go to editor
                &nbsp;<span uk-icon="link"></span>
            </a>
          </>
        }
        description="Create interactive, beautiful e-learning content using the e-learning management console. Easy to deploy and consume with no complex server required. Export as a JSON and read as an address. Amazing performance!"
        {...this.props}
      />
    );
  }
}

ELearningCard.propTypes = {
  index: PropTypes.number
};
ELearningCard.defaultProps = {};

export default ELearningCard;
