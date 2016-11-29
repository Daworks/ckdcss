import React from 'react';
import classNames from 'classnames/bind';
import Logo from 'components/Logo';

import style from './header.scss';

let cx = classNames.bind(style);


// Component
let Header = () => {

  return (
    <div className={ cx('Header') }>
      <Logo big={true} />
      <h2 className={ cx('Header-Headline') }>
        A tiny set of micro interactions for your checkboxes.
      </h2>
    </div>
  );
};

// Props validation
Header.propTypes = {
  text: React.PropTypes.string
};

// Default props
Header.defaultProps = {
  text: 'Jonny'
};

export default Header;
