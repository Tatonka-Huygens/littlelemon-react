import Logo from "./logo.png"

function Header() {
    const logo = <img src={Logo} height={250} width={800} alt="Logo" />
    return (
        <header>
        {logo}
        </header>
      )
}

export default Header;


