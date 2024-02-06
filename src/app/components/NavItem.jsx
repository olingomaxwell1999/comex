import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link className={`nav__link`} target="_blank" href={href}>
      {text}
    </Link>
  );
};

export default NavItem;
