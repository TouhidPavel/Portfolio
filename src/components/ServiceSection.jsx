import portfolioData from '../data/portfolioData';
const ServiceSection = () => {
    const { title, categories } = portfolioData.services;
    return (
        <section className="services-section py-5">
            <div className="container">
                <h5 className="text-center text-white my-3 my-md-5">
                    My <span>Services</span>
                    <br />
                    <span className="display-6 fw-bold section-title">
                        {title}
                    </span>
                </h5>
                <div className="row">
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="card"
                                style={{ width: '400px', borderRadius: 0 }}
                            >
                                <div className="card-body">
                                    <div className="card-title d-flex gap-3 align-items-center">
                                        <i
                                            className={`bx ${category.icon} bx-md`}
                                        ></i>
                                        <h4 className="text-white fw-bold">
                                            {category.categoryTitle}
                                        </h4>
                                    </div>

                                    <ul className="list-group list-group-flush">
                                        {category.servicesList.map((item) => (
                                            <li
                                                key={item.id}
                                                className="list-group-item"
                                            >
                                                <i className="bx bx-check-circle me-2"></i>
                                                {item.service}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
