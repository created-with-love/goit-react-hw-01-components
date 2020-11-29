import TransactionElement from './TransactionElement';
import s from './Transactions.module.css';

export default function Transactions({ transactionsData }) {
  if (transactionsData.length === 0) return null;

  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transactionsData.map(TransactionElement)}</tbody>
    </table>
  );
}
