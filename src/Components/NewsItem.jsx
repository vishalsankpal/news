const NewsItem = ({ data }) => {
  return (
    <div className=" col-md-4 mb-3">
      <div className="card">
        <img
          src={data.urlToImage}
          className="card-img-top"
          alt={data.title}
          style={{ height: "250px", maxHeight: "250px" }}
        />
        <div className="card-body">
          <h5 className="card-title text-truncate">{data.title}</h5>
          <p className="card-text text-truncate">{data.description || "NA"}</p>
          <a href={data.url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
