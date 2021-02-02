import { FC } from 'react';
import s from './Profile.module.css';
import Stats from './ProfileItem';

interface Props {
  name: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}

const Profile: FC<Props> = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <div className={s.userInfo}>
          <p className={s.name}>{name}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>
      </div>

      <Stats {...stats} />
    </div>
  );
};

export default Profile;
