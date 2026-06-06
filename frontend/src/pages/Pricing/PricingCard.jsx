const PricingCard = ({ img, title, description }) => {
  return (
    <div className="col-lg-4 col-md-12 my-4 px-lg-5 text-center">
      <img
        src={img}
        alt={title}
        className="img-fluid mb-3"
        style={{ maxWidth: "65%" }}
      />

      <h4 className="fw-semibold mb-3">{title}</h4>

      <p className="text-muted px-2">{description}</p>
    </div>
  );
};

export default PricingCard;
