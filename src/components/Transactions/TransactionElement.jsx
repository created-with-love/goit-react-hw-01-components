import PropTypes from 'prop-types';
import s from './Transactions.module.css';

export default function TransactionElement({ id, type, amount, currency }) {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionElement.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
