import React, { Component } from "react";
import PropTypes from "prop-types";
import { Description, Title } from "./SynarenCard.styles";

class SynarenCard extends Component {
  timeoutRef;

  state = {
    isVisibleDelayed: !this.isDelayedLoad
  };

  componentWillUnmount() {
    this.clearTimeoutRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.isVisible && this.props.isVisible) {
      this.clearTimeoutRef();
      this.timeoutRef = setTimeout(() => {
        if (this.props.isVisible) {
          this.setState({ isVisibleDelayed: true });
        }
      }, this.props.delayLoadTime);
    }
  }

  clearTimeoutRef() {
    if (this.timeoutRef !== undefined) {
      clearTimeout(this.timeoutRef);
    }
  }

  isEven() {
    return this.props.index % 2;
  }

  description() {
    const props = this.props;
    const isEven = this.isEven();
    return (
      <div
        style={{ zIndex: 2, ...props.descriptionStyle }}
        className={`${
          isEven ? "uk-tile-primary" : "uk-tile-default"
        } uk-padding-small uk-tile uk-height-medium`}
      >
        <Title>
          {props.header}
          {props.link}
        </Title>
        {props.description ? (
          <Description>{props.description}</Description>
        ) : (
          undefined
        )}
      </div>
    );
  }

  content() {
    const { isVisibleDelayed } = this.state;
    const props = this.props;
    const isEven = this.isEven();
    return (
      <div
        className={`${
          !isEven ? "uk-tile-primary" : "uk-tile-default"
        }  uk-tile uk-height-medium`}
        style={{ zIndex: 1, padding: 0, ...props.contentStyle }}
      >
        {isVisibleDelayed ? props.content : undefined}
      </div>
    );
  }

  render() {
    const props = this.props;
    return (
      <div
        className={`${
          !props.isImageCard
            ? "uk-child-width-1-2@s uk-child-width-1-1"
            : "uk-child-width-1-1@s uk-child-width-1-1"
        } uk-grid-collapse uk-text-center`}
        uk-grid="true"
        style={{ borderRadius: "2px" }}
      >
        <div>
          {props.isImageCard
            ? !props.isReverse
              ? this.description()
              : this.content()
            : props.isReverse
            ? this.content()
            : this.description()}
        </div>
        <div>
          {props.isImageCard
            ? !props.isReverse
              ? this.content()
              : this.description()
            : !props.isReverse
            ? this.content()
            : this.description()}
        </div>
      </div>
    );
  }
}

SynarenCard.propTypes = {
  content: PropTypes.element,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  link: PropTypes.element,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  index: PropTypes.number,
  contentStyle: PropTypes.object,
  isImageCard: PropTypes.bool,
  isReverse: PropTypes.bool,
  descriptionStyle: PropTypes.object,
  isVisible: PropTypes.bool,
  isDelayedLoad: PropTypes.bool,
  delayLoadTime: PropTypes.number
};

SynarenCard.defaultProps = {
  content: <div />,
  link: <i />,
  description: "",
  contentStyle: {},
  isImageCard: false,
  isReverse: false,
  descriptionStyle: {},
  isVisible: true,
  isDelayedLoad: false,
  delayLoadTime: 1000
};

export default SynarenCard;
