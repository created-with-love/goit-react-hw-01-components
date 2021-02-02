import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';
import { IFriendListItem } from './FriendListItem';

interface IFriendList {
  friendsData: IFriendListItem[];
}

const FriendList = ({ friendsData }: IFriendList) => {
  if (friendsData.length === 0) return null;
  return <ul className={s.friendList}>{friendsData.map(FriendListItem)}</ul>;
};

export default FriendList;
