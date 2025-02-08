import portfolioData from '../data/portfolioData';

const SkillSection = () => {
    const { title, skillsList } = portfolioData.skills;
    return (
        <section className="skill-section py-5">
            <div className="container">
                <h5 className="text-center text-white my-3 my-md-5">
                    Favorite <span>Skills</span>
                    <br />
                    <span className="display-6 fw-bold section-title">
                        {title}
                    </span>
                </h5>
                <div className="row">
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        {skillsList.map((skill) => (
                            <div key={skill.id} className="card">
                                <img src={skill.icon} alt={skill.name} />
                                <div className="card-footer text-center fw-bolder bg-gradient">
                                    <span>{skill.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillSection;
