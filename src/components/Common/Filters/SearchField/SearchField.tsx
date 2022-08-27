import React, { ChangeEvent } from "react"
import { getClassNames } from "../../../../helpers/getClassNames"
import styles from "./SearchField.module.scss"

interface FiltersProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleChange: (value: ChangeEvent<HTMLInputElement>) => void
}

export const SearchField: React.FC<FiltersProps> = ({
  defaultValue,
  handleChange,
  ...props
}) => (
  <div className={styles.search}>
    <input
      defaultValue={defaultValue ?? "Enter value"}
      onChange={handleChange}
      className={getClassNames(styles.search__input)}
      placeholder={props.placeholder ?? "Enter value"}
      {...props}
    />
  </div>
)
