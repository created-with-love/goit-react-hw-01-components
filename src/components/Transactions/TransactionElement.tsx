interface ITransactionElement {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

export default function TransactionElement({
  id,
  type,
  amount,
  currency,
}: ITransactionElement) {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
