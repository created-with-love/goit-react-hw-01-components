import React, { FC } from 'react';
import s from './Profile.module.css';

interface Props {
  followers: number;
  views: number;
  likes: number;
}

const ProfileListItems: FC<Props> = ({ followers, views, likes }) => {
  return (
    <ul className={s.stats}>
      <li>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{followers}</span>
      </li>
      <li>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{views}</span>
      </li>
      <li>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{likes}</span>
      </li>
    </ul>
  );
};

export default ProfileListItems;
