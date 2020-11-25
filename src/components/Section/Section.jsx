export default function Section({ classNames = '', children }) {
  return <section className={classNames}>{children}</section>;
}
