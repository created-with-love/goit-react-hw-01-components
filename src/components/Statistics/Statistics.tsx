import StatisticElement from './StatisticElement';
import s from './Statistic.module.css';

interface IStatistics {
  title: string;
  stats: {
    label: string;
    percentage: number;
    id: string;
  }[];
}

const Statistics = ({ title, stats }: IStatistics) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>UPLOAD STATS</h2>}

      <ul className={s.statsList}>
        {stats.map((item, index) => StatisticElement({ item, index }))}
      </ul>
    </section>
  );
};

export default Statistics;
