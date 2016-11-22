import React from 'react';
import classNames from 'classnames/bind';

import style from './logo.scss';

let cx = classNames.bind(style);

// Component
let Logo = ({small,big}) => {

  let cssClass = cx({
    Logo: true,
    'Logo-Big': big,
    'Logo-Small': small
  });

  return (
    <img src="/assets/images/ckdcss.svg" alt="CKD-CSS" className={cssClass} />
  );
};

// Props validation
Logo.propTypes = {
  size: React.PropTypes.bool
};

// Default props
Logo.defaultProps = {
  small: false,
  big: false
};

export default Logo;
