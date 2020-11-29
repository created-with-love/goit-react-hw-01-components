import PropTypes from 'prop-types';
import StatisticElement from './StatisticElement';
import s from './Statistic.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>UPLOAD STATS</h2>}

      <ul className={s.statsList}>
        {stats.map((item, index) => StatisticElement({ item, index }))}
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
