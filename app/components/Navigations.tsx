import Link from "next/link";

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
    <header>
      <nav>
        <ul>
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
