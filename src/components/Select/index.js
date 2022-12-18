import { forwardRef } from 'react';
import styles from './Select.module.scss';

function Select({ value, onChange, children, ...outrosProps }, ref) {
  return (
    <select
      ref={ref}
      value={value}
      onChange={onChange}
      {...outrosProps}
      className={styles.select}
    >
      {children}
    </select>
  )
}

export default forwardRef(Select);