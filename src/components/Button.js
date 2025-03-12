import Link from "next/link";
import styles from "../styles/Button.module.css";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}) {
  const buttonClasses = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
