import styles from './Header.module.css';
import igniteLogo from '../assets/image-logo.webp';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
}