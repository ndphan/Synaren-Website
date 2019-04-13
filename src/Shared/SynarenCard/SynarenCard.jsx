import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class SynarenCard extends PureComponent {

  isEven() {
    return this.props.index % 2;
  }

  description() {
    const props = this.props;
    const isEven = this.isEven();
    return (
      <div className={`${isEven ? "uk-tile-primary" : "uk-tile-default"} uk-tile uk-height-medium`}>
        <div className="uk-h4">
          {props.header}
          {props.link}
        </div>
        {
          props.description ? (
            <div>
              {props.description}
            </div>
          ) : undefined
        }
      </div>
    )
  }

  content() {
    const props = this.props;
    const isEven = this.isEven();
    return (
      <div className={`${!isEven ? "uk-tile-primary" : "uk-tile-default"}  uk-tile uk-height-medium`} style={{ padding: 0, ...props.contentStyle}}>
        {props.content}
      </div>
    )
  }

  render() {
    const isEven = this.isEven();
    return (
      <div
        className="uk-child-width-1-2@s uk-child-width-1-1 uk-grid-collapse uk-text-center"
        uk-grid="true"
        style={{ margin: "0 10px", borderRadius: "2px" }}
      >
        <div>
          {isEven ? this.content() : this.description()}
        </div>
        <div>
          {!isEven ? this.content() : this.description()}
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
  contentStyle: PropTypes.object
};

SynarenCard.defaultProps = {
  content: <div />,
  link: <a />,
  description: "",
  contentStyle: {}
};

export default SynarenCard;
