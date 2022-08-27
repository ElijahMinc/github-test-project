import React from "react";
import { Repository } from "../types/repository.interface";
import styles from "./Repository.module.scss";

export const RepositoryItem: React.FC<Omit<Repository, "id">> = ({
  name,
  forks,
  stargazers_count,
  full_name,
}) => {
  const githubUrl = process.env.REACT_APP_GITHUB_URL ?? "https://github.com";
  return (
    <a target="_blank" href={`${githubUrl}/${full_name}`} rel="noreferrer">
      <li className={styles.list__item}>
        <p className="d-flex justify-content-center align-items-center">
          Repository name: {name ?? "The current user with no name C:"}
        </p>
        <div className="d-flex flex-column">
          <p className="d-flex justify-content-center align-items-center">
            Forks: {forks}
          </p>
          <p className="d-flex justify-content-center align-items-center">
            Stars: {stargazers_count}
          </p>
        </div>
      </li>
    </a>
  );
};
