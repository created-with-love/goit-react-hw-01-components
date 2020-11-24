import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({ props }) {
  return (
    <ul className="friend-list">
      {props.map(friend => (
        <li className="item" key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
