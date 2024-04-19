import { useState, useEffect } from 'react';
import './App.css';
import Article from './components/Article';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        console.log(json)
        setPosts(json);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {posts.map(post => (
        <Article 
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          userid={post.userId}
        />
      ))}
    </>
  )
}

export default App;
