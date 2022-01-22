import React, { Component } from "react";
class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date ,source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
            <span class="badge bg-secondary">New</span>
              <div>
              <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style= {{marginLeft:"-68%",left:"90%",zIndex:"1"}}>

                {source}
              </span>
              </div>
              ...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {date}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
