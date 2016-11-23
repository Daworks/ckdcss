import React from 'react';
import classNames from 'classnames/bind';

import style from './pagecontainer.scss';

let cx = classNames.bind(style);

// Component
let PageContainer = ({type, children}) => {

  let cssClass = cx({
    'PageContainer': true,
    'PageContainer--Full': (type === 'full') ? true : false
  });

  return (
    <div className={cssClass}>
      {children}
    </div>
  );
};

// Props validation
PageContainer.propTypes = {
  size: React.PropTypes.string
};

// Default props
PageContainer.defaultProps = {
  size: 'default',
};

export default PageContainer;
