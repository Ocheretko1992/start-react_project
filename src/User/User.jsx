import clsx from "clsx";
import s from "./User.module.css";
import { nanoid } from "nanoid";

const User = ({ users }) => {
  return (
    <div className={s.card}>
      <ul className={s.img}>
        {users.map(({ img, username, lastName, email, birthYear }) => (
          <li
            key={nanoid}
            className={clsx(birthYear < 1990 ? s.imgCard1 : s.imgCard)}>
            <img
              src={img}
              width="100% "
              height="150"
              alt="img"
              className={s.imgCartos}
            />
            <div className={clsx(birthYear < 1990 ? s.centr1 : s.centr)}>
              <p>{username}</p>
              <p>{lastName}</p>
              <p>{email}</p>
              <p>{birthYear}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
