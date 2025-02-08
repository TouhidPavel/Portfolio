import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolioData';
const AboutSection = () => {
    const {
        image,
        title: aboutTitle,
        description,
        buttonText,
    } = portfolioData.about;
    const {
        title: qualificationTitle,
        educations,
        experiences,
    } = portfolioData.qualification;

    return (
        <section className="about-section py-5">
            <div className="container">
                <div className="card">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4">
                            <img
                                src={image}
                                className="img-fluid rounded-start"
                                alt="..."
                            />
                        </div>
                        <div className="col-12 col-md-8 col-lg-8">
                            <div className="card-body pe-md-5">
                                <h5 className="card-title text-white my-3 my-md-5">
                                    My <span>Intro</span>
                                    <br />
                                    <span className="display-6 fw-bold section-title">
                                        {aboutTitle}
                                    </span>
                                </h5>
                                <p className="card-text text-white">
                                    {description}
                                </p>
                                <Link
                                    to="/contact"
                                    className="text-decoration-none"
                                >
                                    <button type='submit' className="d-flex align-items-center gap-3 mt-4 rounded-pill">
                                        {buttonText}
                                        <i className="bx bx-right-arrow-alt"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education & Experience */}
            <div className="container pt-5">
                <h5 className="text-center text-white my-3 my-md-5">
                    Education & <span>Experience</span>
                    <br />
                    <span className="display-6 fw-bold section-title">
                        {qualificationTitle}
                    </span>
                </h5>
                <div className="row">
                    {/* Experience */}
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="card p-3">
                            <div className="card-body">
                                <div className="card-title d-flex gap-3 align-items-center mb-3">
                                    <i className="bx bx-briefcase-alt-2 bx-md"></i>
                                    <h5 className="text-white sub-title">
                                        Work Experience
                                    </h5>
                                </div>
                                <div className="text-white">
                                    {experiences.map((exp) => (
                                        <ul
                                            key={exp.id}
                                            className="list-unstyled mb-4"
                                        >
                                            <li className="designation fw-bolder">
                                                {exp.role}
                                            </li>
                                            <li className="department">
                                                <i className="bx bx-network-chart"></i>{' '}
                                                {exp.department}
                                            </li>
                                            <li className="institution">
                                                <i className="bx bx-buildings"></i>{' '}
                                                {exp.institution}
                                            </li>
                                            <li className="year">
                                                <i className="bx bx-calendar"></i>{' '}
                                                {exp.year}
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="col-12 col-md-6 col-lg-6 mt-3 mt-md-0">
                        <div className="card p-3">
                            <div className="card-body">
                                <div className="card-title d-flex gap-3 align-items-center mb-3">
                                    <i className="bx bxs-graduation bx-md"></i>
                                    <h5 className="text-white sub-title">
                                        Education
                                    </h5>
                                </div>
                                <div className="text-white">
                                    {educations.map((edu) => (
                                        <ul
                                            key={edu.id}
                                            className="list-unstyled mb-4"
                                        >
                                            <li className="degree fw-bolder">
                                                {edu.degree}
                                            </li>
                                            <li className="field">
                                                <i className="bx bx-network-chart"></i>{' '}
                                                {edu.field}
                                            </li>
                                            <li className="institution">
                                                <i className="bx bx-buildings"></i>{' '}
                                                {edu.institution}
                                            </li>
                                            <li className="year">
                                                <i className="bx bx-calendar"></i>{' '}
                                                {edu.year}
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
