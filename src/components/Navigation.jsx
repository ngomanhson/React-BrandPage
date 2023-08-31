const Navigation = () => {
    return (
        <nav className="container ">
            <div className="logo">
                <a href="/">
                    <img src="./images/brand_logo.png" alt="Nike" />
                </a>
            </div>

            <ul>
                <li>
                    <a href="#!">Menu</a>
                </li>
                <li>
                    <a href="#!">Location</a>
                </li>
                <li>
                    <a href="#!">About</a>
                </li>
                <li>
                    <a href="#!">Contact</a>
                </li>
            </ul>

            <a href="/" className="btn btn-login">
                Login
            </a>
        </nav>
    );
};

export default Navigation;
