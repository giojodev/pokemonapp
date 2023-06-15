import Link from "next/link";
import styles from './Navigation.module.css';

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Pokemon",
    route: "/pokemon",
  },
  {
    label: "Tipos",
    route: "/tipos",
  },
  {
    label: "Berries",
    route: "/berries",
  },
  {
    label: "Movimientos",
    route: "/movements",
  },
  {
    label: "Ubicaciones",
    route: "/locations",
  },
];

export function Navigation() {
  return (<>
    <header className={styles.header}>
      <nav >
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  </>);
}
