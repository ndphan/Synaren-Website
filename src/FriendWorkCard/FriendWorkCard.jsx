import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SynarenCard from '../Shared/SynarenCard';
import UIkit from 'uikit';
import a from './assets/1.png';
import b from './assets/2.png';
import c from './assets/3.png';
import d from './assets/4.png';
import e from './assets/5.png';
import f from './assets/6.png';
import g from './assets/7.png';
import h from './assets/8.png';
import k from './assets/9.png';
import l from './assets/10.png';

const Images = [a, b, c, d, e, f, g, h, k, l];

class FriendWorkCard extends PureComponent {
  constructor() {
    super();
    this.slideShowRef = React.createRef();
  }
  componentDidMount() {
    UIkit.slideshow(this.slideShowRef.current);
  }
  render() {
    return (
      <SynarenCard
        isReverse={true}
        descriptionStyle={{ padding: "50px" }}
        content={
          <div
            ref={this.slideShowRef}
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex="-1"
            autoplay-interval="7000"
            uk-visible-toggle="true"
            uk-slideshow="autoplay:true;finite:false;max-height:300;min-height:300;"
          >
            <ul className="uk-slideshow-items" style={{background:"white"}}>
              {
                Images.map((image, index) => (
                  <li key={index}>
                    <img data-src={image}
                      alt="Friendwork"
                      style={{ height: "300px", padding: "10px", objectFit: "scale-down"}}
                      uk-img={
                        (index === 0 ? "target: !ul > :last-child, !* +*" : index === Images.length - 1 ? "target: !* -*, !ul > :first-child" : "target: !* -*, !* +*")
                      }
                    />
                  </li>
                ))
              }
            </ul>
            <a className="uk-position-center-left uk-preserve uk-position-small uk-hidden-hover" href="#/" uk-slidenav-previous="true" uk-slideshow-item="previous">
              <svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg" data-svg="slidenav-previous"><polyline fill="none" stroke="#000" strokeWidth="1.4" points="12.775,1 1.225,12 12.775,23 "></polyline></svg>
            </a>
            <a className="uk-position-center-right uk-preserve uk-position-small uk-hidden-hover" href="#/" uk-slidenav-next="true" uk-slideshow-item="next">
              <svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg" data-svg="slidenav-next"><polyline fill="none" stroke="#000" strokeWidth="1.4" points="1.225,23 12.775,12 1.225,1 "></polyline></svg>
            </a>
          </div>
        }
        header={<a target="_blank" rel="noopener noreferrer" className="uk-link-heading" href={"https://www.synaren.com/friendwork"}>FriendWork</a>}
        link={
          <a target="_blank" rel="noopener noreferrer" className="uk-link-heading" style={{ marginLeft: "4px", transform: "translateY(-10%)", color: "black" }} href={"https://www.synaren.com/friendwork"} uk-icon="link">
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="link"><path fill="none" stroke="#000" strokeWidth="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"></path><path fill="none" stroke="#000" strokeWidth="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"></path><path fill="none" stroke="#000" strokeWidth="1.1" d="M7.925,11.875 L11.925,7.975"></path></svg>
          </a>
        }
        description="Friendwork is a mentoring platform connecting mentors with mentees. Join groups, add connections and begin communicating with people who know."
        {...this.props}
      />
    );
  }
}

FriendWorkCard.propTypes = {
  index: PropTypes.number
};
FriendWorkCard.defaultProps = {};

export default FriendWorkCard;
