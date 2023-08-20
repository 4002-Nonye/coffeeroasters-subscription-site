import React from 'react';
import PropTypes from 'prop-types';

function Card({
  title, content, className, children,
}) {
  return (
    <div>
      {children}
      <div className={className}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Card;

Card.defaultProps = {
  title: '',
  content: '',
  className: '',
  children: [],
};

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
