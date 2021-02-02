import React from 'react';
import s from './Profile.module.css';

interface IProfileListItems {
  followers: number;
  views: number;
  likes: number;
}

export default function ProfileListItems<T extends IProfileListItems>({
  followers,
  views,
  likes,
}: T) {
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
}
