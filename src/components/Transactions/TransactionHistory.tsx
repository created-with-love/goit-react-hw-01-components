import TransactionElement from './TransactionElement';
import s from './Transactions.module.css';

interface ITransaction {
  transactionsData: {
    id: string;
    type: string;
    amount: string;
    currency: string;
  }[];
}

export default function Transactions({ transactionsData }: ITransaction) {
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
