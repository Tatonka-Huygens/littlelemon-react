import Logo from "./logo.png"

function Header() {
    const logo = <img src={Logo} height={150} width={600} alt="Logo" />
    return (
        <header>
        {logo}
        </header>
      )
}

export default Header;


