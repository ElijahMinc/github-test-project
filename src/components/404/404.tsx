import React from "react";
import styles from "./404.module.scss";
import errorImage from "../../static/404.png";
import { Button } from "../Common/Button/Button";
import { useHistory } from "react-router-dom";

export const ErrorPage: React.FC = () => {
  const { goBack } = useHistory();
  return (
    <div className={styles.error}>
      <div className={styles.error__wrapper}>
        <Button onClick={goBack} />
        <img src={errorImage} alt="error" />
      </div>
    </div>
  );
};
