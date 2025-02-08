import portfolioData from '../data/portfolioData';

const TeamSection = () => {
    const { title, members } = portfolioData.team;
    return (
        <section className="team-section py-5">
            <div className="container">
                <h5 className="text-center text-white my-3 my-md-5">
                    Meet My <span>Team</span>
                    <br />
                    <span className="display-6 fw-bold section-title">
                        {title}
                    </span>
                </h5>
                <div className="row">
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        {members.map((member) => (
                            <div
                                key={member.id}
                                className="card"
                                style={{ width: '280px', borderRadius: 0 }}
                            >
                                <figure className="m-0 p-3 text-center">
                                    <img
                                        className="img-fluid"
                                        loading="lazy"
                                        src={member.image}
                                        alt={member.name}
                                    />
                                    <figcaption className="mt-3">
                                        <h4 className="team-member-name">
                                            {member.name}
                                        </h4>
                                        <p className="fw-bolder team-member-role">
                                            {member.role}
                                        </p>
                                        <div className="mt-3 d-flex gap-2 justify-content-center align-items-center social-link">
                                            {member.links.map((link) => (
                                                <a
                                                    key={link.id}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="rounded-circle d-flex justify-content-center align-items-center text-decoration-none"
                                                >
                                                    <i
                                                        className={`${link.icon}`}
                                                    ></i>
                                                </a>
                                            ))}
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
