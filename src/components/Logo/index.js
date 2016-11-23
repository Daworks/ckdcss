import React from 'react';
import classNames from 'classnames/bind';

import style from './logo.scss';

let cx = classNames.bind(style);

// Component
let Logo = ({size}) => {

  let cssClass = cx({
    'Logo': true,
    'Logo-Big': (size === 'big') ? true : false,
    'Logo-Small': (size === 'small') ? true : false
  });

  return (
    <img src="/assets/images/ckdcss.svg" draggable="false" alt="CKD-CSS" className={cssClass} />
  );
};

// Props validation
Logo.propTypes = {
  size: React.PropTypes.string
};

// Default props
Logo.defaultProps = {
  size: 'default',
};

export default Logo;
