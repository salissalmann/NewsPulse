import React from 'react'
import NewsItem from './NewsItem'
import { useContext } from 'react'
import {Spin} from "./Spin"
import { useEffect , useState } from 'react'
import NewsContext from '../context/newscontext'

export function FunctionalNews(props) 
{
    const Context = useContext(NewsContext);
    const [RunEFF , SetRunEFF] = useState(false)
    const [articles , setArticles ] = useState([]);
    const [page , setPage ] = useState(1);
    const [loading , setLoading ] = useState(false);
    const [url , setUrl ] = useState("");
    const FetchNews = async ()=>
    {
        SetRunEFF(true)
        setLoading(true);
        let FetchData = await fetch(`https://newsapi.org/v2/everything?domains=cnn.com&apiKey=00b419a8aeac44b7963bf1f6338c2f81&pageSize=${ props.pageSize}`)
        let ToJson = await FetchData.json();
        setLoading(false);
        setArticles(ToJson.articles);
    }

    useEffect( ()=> 
    {
        if(RunEFF===false)
        {
            FetchNews();
        }
    },[])
  
 

   const HandlePrev = async ()=>
   {
        setLoading(true);
        let FetchData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=00b419a8aeac44b7963bf1f6338c2f81&page=${page-1}&pageSize=${ props.pageSize}`)
        let ToJson = await FetchData.json();  
        setLoading(false);
        setArticles(ToJson.articles);
        setPage(page-1);    
   }
 
   const HandleNext = async ()=>
   {
        setLoading(true);
        let FetchData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=00b419a8aeac44b7963bf1f6338c2f81&page=${page+1}&pageSize=${ props.pageSize}`)
        let ToJson = await FetchData.json();  
        setLoading(false);
        setArticles(ToJson.articles);
        setPage(page+1);    
   }
 
   let i=0;
   return (
    <>
        {(articles && articles.length===0) ? (
            <div className='container my-4'>
                {loading && <Spin/>}
            </div>
        ):(
        <div className='container my-4'>
            <h3 className='news'>{Context.Heading}</h3>
            
            {loading && <Spin/>}
        
            <div className='row'>       
            {!loading && articles.map( (element) => 
                { 
                    return( 
                    <div className='col-lg-3 my-2' key={element.id}>
                    <NewsItem key={i++} title={element.title} desc={element.description} url={element.urlToImage} author={element.author} />
                    </div>      
                    )
                })
            }
            </div>
        
            <div className='container d-flex justify-content-between'>
                <button disable={(page===1)?true:false}type="button" className="btn btn-dark" onClick={HandlePrev}>Previous</button>
                <button type="button" className="btn btn-dark" onClick={HandleNext}>Next</button>
            </div>    
        </div>)}
        
    </>
    )
}

