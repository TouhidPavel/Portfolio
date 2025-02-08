import portfolioData from "../data/portfolioData.js";

const BlogSection = () => {
    const { title, blogs } = portfolioData.blogs;

    return (
        <section className="blog-section py-5">
            <div className="container">
                <h5 className="text-center text-white my-3 my-md-5">
                    My <span>Blog</span>
                    <br />
                    <span className="display-6 fw-bold section-title">
                        {title}
                    </span>
                </h5>

                <div className="row">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card shadow-sm h-100">
                                <img
                                    src={blog.image}
                                    className="card-img-top"
                                    alt={blog.title}
                                    loading="lazy"
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold">{blog.title}</h5>
                                    <p className="text-secondary">{blog.date}</p>
                                    <p className="card-text">{blog.excerpt}</p>
                                    <a href={blog.link}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="btn btn-primary mt-auto"
                                    >
                                        Read More
                                        <i className="bx bx-right-arrow-alt ms-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;