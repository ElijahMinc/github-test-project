import React from "react";
import styles from "./UserBio.module.scss";
import { getClassNames } from "../../../helpers/getClassNames";
import { User } from "../../../types/user.interface";
import { getFormatDate } from "../../../helpers/getFormatDate";
import avatarImg from "../../../static/avatar.png";

export const UserBio: React.FC<User> = ({
  id,
  name,
  email,
  following,
  followers,
  created_at,
  avatar_url,
  public_repos,
}) => {
  return (
    <div className={getClassNames(styles.bio, "d-flex")}>
      <div className={styles.bio__img}>
        <img src={avatar_url ?? avatarImg} alt="avatar" />
      </div>
      <div className={styles.bio__info}>
        <p>
          <strong>Name</strong>: {name ?? "No name"}
        </p>
        <p>
          <strong>Following</strong>: {following ?? "No Following"}
        </p>
        <p>
          <strong>Followers</strong>: {followers ?? "No followers"}
        </p>
        <p>
          <strong>Created At</strong>:{" "}
          {created_at ? getFormatDate(new Date(created_at)) : "No Date"}
        </p>
        <p>
          <strong>Email</strong>: {email ?? "No Email"}
        </p>
        <p>
          <strong>Public Repos</strong>: {public_repos ?? "No public repos"}
        </p>
      </div>
    </div>
  );
};
