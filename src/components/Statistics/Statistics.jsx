import PropTypes from 'prop-types';
import StatisticElement from './StatisticElement';
import s from './Statistic.module.css';

export default function Statistics({ title, stats }) {
  const colors = [
    '#ba6e6e',
    '#746eba',
    '#6eb1ba',
    '#8337b3',
    '#2f9c2d',
    'baac2b',
  ];
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>UPLOAD STATS</h2>}

      <ul className={s.statsList}>
        {stats.map((item, index) => (
          <li
            className={s.item}
            key={item.id}
            style={{ backgroundColor: colors[index] }}
          >
            <StatisticElement label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
