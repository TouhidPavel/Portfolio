import portfolioData from "../data/portfolioData.js";
const ContactSection = () => {
    const {title, description, formFields, contactInfo,buttonText} = portfolioData.contact
    return (
        <section className="contact-section py-5">
            <div className="container">
                <h5 className="text-center text-white my-3 my-md-5">
                    Get In <span>Touch</span>
                    <br/>
                    <span className="display-6 fw-bold section-title">
                        {title}
                    </span>
                </h5>
                {/*<p className="text-center lead">*/}
                {/*    {description}*/}
                {/*</p>*/}
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4">
                        {
                            contactInfo.map((info) => (
                                <div key={info.id} className="card mb-2 mb-md-3">
                                    <div className="card-body">
                                        <h5 className="card-title d-flex align-items-center gap-3 fw-bolder">
                                            <i className={`bx ${info.icon} bx-sm`}></i>
                                            {info.title}
                                        </h5>
                                        <div>
                                            {
                                                info.link !== '#' ? (
                                                    <a href={info.link} target="_blank" rel="noopener noreferrer"
                                                       className="nav-link mt-2 d-inline-flex align-items-center gap-2">
                                                        {info.value}
                                                        {(info.title === "Messenger" || info.title === "Telegram") && (
                                                            <i className="bx bx-right-arrow-alt"></i>
                                                        )}
                                                    </a>
                                                ) : (
                                                    <span>
                                                        {info.value}
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        <form action="" className="mt-2 mt-md-0">
                            {formFields.map((field) => (
                                <div key={field.id} className="mb-3">
                                    {field.type === 'textarea' ? (
                                        <textarea
                                            className="form-control"
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            rows="6"
                                            required
                                        ></textarea>
                                    ) : (
                                        <input
                                            type={field.type}
                                            className="form-control mb-2 mb-md-3"
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            required
                                        />
                                    )}
                                </div>
                            ))}
                            <button className="d-flex align-items-center gap-3 mt-4 rounded-pill">
                                {buttonText}
                                <i className="bx bx-right-arrow-alt"></i>
                            </button>
                        </form>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="ratio ratio-1x1 mt-4 mt-md-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116289.59494977964!2d88.52375858932857!3d24.379569472081794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa96a38d031%3A0x10f93a950ed6f410!2sRajshahi!5e0!3m2!1sen!2sbd!4v1739034771898!5m2!1sen!2sbd"
                                style={{border: 0}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;