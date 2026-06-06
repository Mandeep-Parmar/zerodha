import React from "react";

const TopicColumn = ({ icon, title, links }) => {
  return (
    <div className="col-lg-4 col-md-12 mb-4">
      {/* Heading */}
      <div className="d-flex align-items-center mb-3">
        <i className={`${icon} me-2`}></i>
        <h6 className="mb-0 fw-semibold">{title}</h6>
      </div>

      {/* Links */}
      <ul className="list-unstyled topic-links">
        {links.map((link, index) => (
          <li key={index} className="mb-1">
            <a href="#" className="text-decoration-none">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicColumn;
