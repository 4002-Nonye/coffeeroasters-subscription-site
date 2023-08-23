import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.module.css';

function OrderSummary({
  coffeeTaste,
  coffeeType,
  coffeeQuantity,
  coffeeGround,
  coffeeDelivery,
}) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.summaryTitle}>Order summary</h3>
      <div className={styles.summaryText}>
        <p>
          I drink my coffee using
          <span>{coffeeTaste}</span>
          , with a
          <span>{coffeeType}</span>
          {' '}
          type of
          bean.
          <span>{coffeeQuantity}</span>
          {' '}
          ground ala
          <span>
            {coffeeGround}
          </span>
          , sent to me
          <span>
            {coffeeDelivery}
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default OrderSummary;

OrderSummary.propTypes = {
  coffeeTaste: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
  coffeeType: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
  coffeeQuantity: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
  coffeeGround: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
  coffeeDelivery: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
};
OrderSummary.defaultProps = {
  coffeeTaste: '',
  coffeeType: '',
  coffeeQuantity: '',
  coffeeGround: '',
  coffeeDelivery: '',
};
