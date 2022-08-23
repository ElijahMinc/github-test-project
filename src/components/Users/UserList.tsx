import React from "react";
import { User } from "../../types/user.interface";
import styles from "./User.module.scss";
import { UserItem } from "./UserItem";

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul className={styles["user-list"]}>
      {!!users.length &&
        users.map(({ id, avatar_url, name, public_repos, login }) => (
          <UserItem key={id} {...{ id, avatar_url, public_repos, name, login}} />
        ))}
    </ul>
  );
};
