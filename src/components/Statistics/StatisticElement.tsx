import s from './Statistic.module.css';

interface IStatisticElement {
  item: {
    label: string;
    percentage: number;
    id: string;
  };
  index: number;
}

const StatisticElement = <T extends IStatisticElement>({ item, index }: T) => {
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
};

export default StatisticElement;
