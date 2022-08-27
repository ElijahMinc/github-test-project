import React from "react";
import styles from "./Repository.module.scss";
import { RepositoryItem } from "./RepositoryItem";
import { Repository } from "../types/repository.interface";

interface UserListProps {
  repositories: Repository[];
}

export const RepositoryList: React.FC<UserListProps> = ({ repositories }) => {
  return (
    <ul className={styles.list}>
      {!!repositories.length &&
        repositories.map(({ id, forks, name, stargazers_count, full_name }) => (
          <RepositoryItem
            key={id}
            {...{ id, stargazers_count, name, forks, full_name }}
          />
        ))}
    </ul>
  );
};
