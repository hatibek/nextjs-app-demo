import styles from "./navbar.module.css";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return <div className={styles.navbar}>{links.map((link) => (
    <Link key={link.href} href={link.href} className={styles.navLink}>
      {link.label}
    </Link>
  ))}</div>;
}
