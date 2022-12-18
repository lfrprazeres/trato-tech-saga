import styles from './Button.module.scss';

export default function Button({ disabled, children, type, onClick }) {
  return (
    <button disabled={disabled} className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  )
}