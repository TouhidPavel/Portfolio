import { Link } from 'react-router-dom';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="py-3">
                <div className="container">
                    <div className="row d-flex align-items-center text-center text-md-start">
                        <div className="col-12 col-md-6 col-lg-6">
                            <Link to="/" className="navbar-brand text-white">
                                <span>Touhid</span>Pavel
                                <span>.</span>
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="d-flex gap-3 justify-content-center justify-content-md-end">
                                <Link to="/" className="nav-link text-white">
                                    Facebook
                                </Link>
                                <Link to="/" className="nav-link text-white">
                                    LinkedIn
                                </Link>
                                <Link to="/" className="nav-link text-white">
                                    GitHub
                                </Link>
                                <Link to="/" className="nav-link text-white">
                                    Instagram
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="copy-write">
                        <p className="text-center">
                            <i className="bx bxs-copyright"></i> 2024 -{' '}
                            {currentYear} by Touhiduzzman Pavel | All Rights
                            Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
