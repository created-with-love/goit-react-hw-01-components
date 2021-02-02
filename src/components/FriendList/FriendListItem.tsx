const s = require('./FriendList.module.css');

export interface IFriendListItem {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

const FriendListItem = ({ id, avatar, name, isOnline }: IFriendListItem) => {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
