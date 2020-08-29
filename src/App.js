import React, { useState, useEffect } from 'react';
import './App.css';
import News from './components/News/News';
import Header from './components/Header/Header';

function App() {
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=182c7fb87c024effa687e65a5e84f937')
    .then(res => res.json())
    .then(data => setArticle(data.articles))
  }, []);

  return (
    <>
      <Header></Header>
      {
        articles.map(article => <News article={article}></News>)
      }
    </>
  );
}

export default App;
