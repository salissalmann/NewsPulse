import React, { Component } from 'react'
import NewsItem from './NewsItem'
//Here page Size is the number of posts to be displayed on a page
import {Spin} from "./Spin"
//Loading state used, secondly if statement added on render.
//Catagories wala jo chakar tha ke link change hore the per data remount nhi hora tha tou uska solution yeh tha ke props per key bhejdo jo ke unique hote hai ise react ko pta chaljata hai naya data load kerna hai.
export class Spinner extends Component 
{
 
  constructor()
  {
      super();
      this.state = {
        articles: [],
        page: 1,
        loading: false
      }
  }

  //Runs after rendering
  async componentDidMount()
  {
    this.setState( {loading:true});
    let FetchData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=00b419a8aeac44b7963bf1f6338c2f81&pageSize=${this.props.pageSize}`)
    let ToJson = await FetchData.json();
    
    this.setState( { articles: ToJson.articles } )
    this.setState( {loading:false});
   
  }

  HandlePrev = async () =>
  {
    this.setState( {loading:true});
    let FetchData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=00b419a8aeac44b7963bf1f6338c2f81&page=${this.state.page-1}&pageSize=${this.props.pageSize}`)
    let ToJson = await FetchData.json();  
    
    this.setState( {loading:false});
    this.setState( { articles: ToJson.articles ,page: this.state.page-1 } )
  }
  
  HandleNext = async () =>
  {
    this.setState( {loading:true});
    let FetchData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=00b419a8aeac44b7963bf1f6338c2f81&page=${this.state.page+1}&pageSize=${this.props.pageSize}`)

    let ToJson = await FetchData.json();  
    console.log(ToJson)
    this.setState( {loading:false});

    this.setState( { articles: ToJson.articles ,page: this.state.page+1 } )

  }

  render() 
  {
        return (
        <>
            <div className='container my-4'>
                <h3>HEADLINES</h3>
                
                {this.state.loading && <Spin/>}
                
                
                
                <div className='row'>       
                {!this.state.loading && this.state.articles.map( (element) => 
                    { 
                        return( 
                        <div className='col-md-4 my-2' key={element.id}>
                        <NewsItem  title={element.title} desc={element.description} url={element.urlToImage} />
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
