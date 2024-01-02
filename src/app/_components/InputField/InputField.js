/* Styles */
import styles from '@/app/_components/InputField/InputField.module.scss';

export default function InputField({
  name,
  type,
  placeholder,
  value,
  onChange,
  autoFocus,
  disabled
}) {
  return (
    <input
      className={styles.input}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
      disabled={disabled}
    />
  );
}
