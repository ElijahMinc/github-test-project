import React, { ChangeEvent } from "react";
import { getClassNames } from "../../../helpers/getClassNames";
import styles from "./Filter.module.scss";

interface FiltersProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  defaultValue,
  handleChange,
  ...props
}) => {
  // const classes = [...props.className]

  return (
    <div className={styles.search}>
      <input
        defaultValue={defaultValue ?? 'PROASKJDKASJHD'}
        onChange={handleChange}
        className={getClassNames(styles.search__input)}
        placeholder={props.placeholder ?? "Enter value"}
        {...props}
      />
    </div>
  );
};
