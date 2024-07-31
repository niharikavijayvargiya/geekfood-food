import './Header.css'
function Header() {
    return (
        <div className="container1">
            <div className="navdiv">
                <nav className="navbarItem">
                    <section className="logo">
                        <img src="https://flowbite.com/docs/images/logo.svg" />
                        <p>GeekFood</p>
                    </section>

                    <section>

                        <ul className="list">
                            <li>Home</li>
                            <li>Quote</li>
                            <li>Resturantse</li>
                            <li style={{ color: "#1d4ed8" }}>Foods</li>
                            <li>Contact</li>
                        </ul>

                    </section>

                    <section>
                        <button className="getstartbtn">Get started</button>
                    </section>
                </nav>
            </div>
        </div>
    )
}

export default Header