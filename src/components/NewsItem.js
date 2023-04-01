import React, { Component } from 'react'

export default class NewsItem extends Component 
{
  render() 
  {
    const title = this.props.title.slice(0,20)
    const description = this.props.desc.slice(0,85);
    const author = this.props.author.slice(0,25)

    return (
      <div className="container">
        <div className="card" style={{width: "18rem"}} >
          <img src={this.props.url} className="card-img-top" alt='NoImage' width={200} height={170}  />
          <div className="card-body">
            <h5 className="card-title">{title+".."}</h5>
            <p className="card-text" >{description + ".."}</p>
          </div>
          <div className='author'>{author}</div>
        </div>
      </div>
      
    )
  }
}