const NavLinks = ({ links, className = "",linkClassName = "" }) => {
    return (
      <ul className={className}>
        {links.map((link) => (
          <li key={link.id}>
            <a className={linkClassName} href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    );
  };
  export default NavLinks;