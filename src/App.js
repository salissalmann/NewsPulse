import './App.css';
import React, { Component } from 'react'
//import { News } from './components/News';
//import { NewsAPI } from './components/NewsApi';
//import { PaginationApi } from './components/PaginationApi';
//import { Spinner } from './components/Spinner';
//import { Inifinity } from './components/InfinityScroll';
import { FunctionalNews } from './components/FunctionalNews'
import NavigationBar from './components/NavigationBar';
import NewsStates from './context/newsstates';

export default class App extends Component 
{
  render() 
  {
    return (
      <>
      <NewsStates>
          <NavigationBar/>  
          <FunctionalNews pageSize={8} />
      </NewsStates>
      </>
    )}
}

