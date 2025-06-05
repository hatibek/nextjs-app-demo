import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ImageComponent from "../../components/image";

const links = [
  { label: "Posts", href: "/posts" },
  { label: "Photos", href: "/photos" },
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.navbar}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${
              pathname === link.href ? styles.active : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
