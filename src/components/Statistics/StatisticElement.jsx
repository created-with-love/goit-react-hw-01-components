import PropTypes from 'prop-types';
import s from './Statistic.module.css';

export default function StatisticElement({ item, index }) {
  const colors = [
    '#ba6e6e',
    '#746eba',
    '#6eb1ba',
    '#8337b3',
    '#2f9c2d',
    'baac2b',
  ];
  return (
    <li
      className={s.item}
      key={item.id}
      style={{ backgroundColor: colors[index] }}
    >
      <span className={s.label}>{item.label}</span>
      <span className={s.percentage}>{item.percentage}%</span>
    </li>
  );
}

StatisticElement.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
