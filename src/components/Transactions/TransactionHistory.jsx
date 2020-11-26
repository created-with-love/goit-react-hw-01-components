import PropTypes from 'prop-types';
import TransactionElement from './TransactionElement';
import s from './Transactions.module.css';

export default function Transactions({ transactionsData }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactionsData.map(item => (
          <tr key={item.id}>
            <TransactionElement
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
