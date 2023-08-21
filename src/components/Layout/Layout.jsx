import React from 'react';
import PropTypes from 'prop-types';

function Layout({ className, children }) {
  return (
    <section className={className}>{children}</section>
  );
}

export default Layout;

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,

};

Layout.defaultProps = {
  className: '',
  children: [],

};
