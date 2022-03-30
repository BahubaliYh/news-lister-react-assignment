import React from "react"

function NewsList(props) {
  return (
    <div className="container">
      {props.newslist.map((news, id) => (
        <div className="col-md-12 newsCard" key={id}>
          <div className="row">
            <div className="col-md-6 imgThumnail">
              <img src={news.fields.thumbnail} className="image" />
            </div>
            <div class="col-md-6">
              <h5>{news.webTitle}</h5>
              <a href={news.webUrl} target="_blank">
                Click Here For More Details
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsList
