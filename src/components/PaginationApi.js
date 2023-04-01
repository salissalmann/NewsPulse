import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class PaginationApi extends Component 
{

 
  constructor()
  {
      super();
      this.state = {
        articles: [],
        page: 1
      }
  }

  //Runs after rendering
  async componentDidMount()
  {
    let FetchData = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=00b419a8aeac44b7963bf1f6338c2f81")
    let ToJson = await FetchData.json();
    this.setState( { articles: ToJson.articles } )

  }

  HandlePrev = async () =>
  {
    let FetchData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=00b419a8aeac44b7963bf1f6338c2f81&page=${this.state.page-1}`)
    let ToJson = await FetchData.json();  
    this.setState( { articles: ToJson.articles ,page: this.state.page-1 } )
  }
  
  HandleNext = async () =>
  {
    let FetchData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=00b419a8aeac44b7963bf1f6338c2f81&page=${this.state.page+1}`)
    let ToJson = await FetchData.json();  
    this.setState( { articles: ToJson.articles ,page: this.state.page+1 } )
  }

  render() 
  {
        return (
        <>
            <div className='container my-4'>
                <h3>HEADLINES</h3>
                <div className='row'>       
               
                {this.state.articles.map( (element) => 
                    { 
                        return( 
                        <div className='col-md-4 my-2' key={element.id}>
                        <NewsItem  title={element.title} desc={element.description} />
                        </div>      
                        )
                    })
                }
                </div>
            
                <div className='container d-flex justify-content-between'>
                    <button disable={(this.state.page==1)?true:false}type="button" className="btn btn-dark" onClick={this.HandlePrev}>Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.HandleNext}>Next</button>
                </div>    
            </div>
        </>
        )
  }
}
