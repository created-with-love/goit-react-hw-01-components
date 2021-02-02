import s from './Profile.module.css';
import Stats from './ProfileItem';

interface IProfile {
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

export default function Profile<T extends IProfile>({
  name,
  tag,
  location,
  avatar,
  stats,
}: T) {
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
}
