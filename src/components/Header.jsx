import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link to="/" className="navbar-brand text-white">
                            <span>Touhid</span>Pavel
                            <span>.</span>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#headerNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="bx bx-menu-alt-right bx-md"></i>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="headerNav"
                        >
                            <ul className="navbar-nav ms-auto gap-md-4">
                                <li>
                                    <Link
                                        to="/"
                                        className="nav-link text-white"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className="nav-link text-white"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/blog"
                                        className="nav-link text-white"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services"
                                        className="nav-link text-white"
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="nav-link text-white"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
