import React from 'react';
import classNames from 'classnames/bind';

import style from './header.scss'

let cls = classNames.bind(style);


// Component
let Header = ({text}) => {
  return (
    <div className={ cls('Header') }>
      {`Hi ${text}`}
    </div>
  )
}

// Props validation
Header.propTypes = {
  text: React.PropTypes.string
}

// Default props
Header.defaultProps = {
  text: 'Jonny'
}

export default Header;
