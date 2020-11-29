import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

export default function FriendList({ friendsData }) {
  if (friendsData.length === 0) return null;
  return <ul className={s.friendList}>{friendsData.map(FriendListItem)}</ul>;
}
