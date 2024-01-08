import Logo from "./logo_footer.png"

function Footer() {
  const logo = <img src={Logo} height={50} width={30} alt="Logo" />
  return (
  <footer>
    <article>
      {logo}
    </article>
    <article>
      <p>Little Lemon Restaurant • © 2023</p>
    </article>
  </footer>
    )
}

export default Footer;

