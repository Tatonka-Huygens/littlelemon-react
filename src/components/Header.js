import Logo from "./logo.png"


function Header() {
    const logo = <img src={Logo} height={100} width={400} alt="Logo" />
    return (
        <header>
        {logo}
        </header>
      )
}

export default Header;


