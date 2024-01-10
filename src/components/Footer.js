import Logo from "./logo.ico"

function Footer() {
  const logo = <img src={Logo} height={50} width={50} alt="Logo" />
  return (
  <footer>
    <article>
      {logo}
    </article>
    <article>
      <p>Little Lemon Restaurant • © 2024</p>
    </article>
  </footer>
    )
}

export default Footer;

