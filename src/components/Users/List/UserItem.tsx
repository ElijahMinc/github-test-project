import React from "react"
import { NavLink } from "react-router-dom"
import { User } from "../types/user.interface"
import styles from "./User.module.scss"
import avatarImg from "../../../static/avatar.png"

type UserItemProps = Pick<
  User,
  "id" | "name" | "avatar_url" | "public_repos" | "login"
>

export const UserItem: React.FC<UserItemProps> = ({
  id,
  name,
  avatar_url,
  public_repos,
  login,
}) => {
  return (
    <NavLink to={`/user/${login}/${id}`}>
      <li className={styles["user-list__item"]}>
        <img
          src={avatar_url ?? avatarImg}
          className={styles["user-list__avatar"]}
          alt="avatar"
        />
        <p className="d-flex justify-content-center align-items-center">
          {name ?? "The current user with no name C:"}
        </p>
        <p className="d-flex justify-content-center align-items-center">
          Repo: {public_repos}
        </p>
      </li>
    </NavLink>
  )
}
