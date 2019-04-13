import React from 'react';
import { Banner } from './SynarenBanner.styles';

const SynarenBanner = _ => (
  <Banner className="banner primary-color">
    <div style={{margin:"auto",maxWidth:"800px"}}>
      Synaren
    </div>
  </Banner>
)
SynarenBanner.propTypes = {};
SynarenBanner.defaultProps = {};

export default SynarenBanner;
