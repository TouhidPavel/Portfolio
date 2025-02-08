import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolioData';
const HeroSection = () => {
    const { image, greeting, name, title, description, buttonText } =
        portfolioData.hero;
    return (
        <section className="hero-section d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <img
                            src={image}
                            alt="Hero Image"
                            className="img-fluid mb-3 mb-md-4 hero-image"
                        />
                        <h1 className="text-white hero-title">
                            <span className="d-block fs-1">{greeting}</span>
                            <span className="display-5 hero-name">{name}</span>
                        </h1>
                        <h2 className="display-6 text-white hero-subtitle">
                            {title}
                        </h2>
                        <p className="lead text-white my-3 hero-text">
                            {description}
                        </p>
                        <Link to="/contact" className="text-decoration-none">
                            <button className="d-flex align-items-center gap-3 mx-auto mt-4 rounded-pill">
                                {buttonText}
                                <i className="bx bxs-chat"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
