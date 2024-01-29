import React from 'react';
import axios from 'axios';
import Layout from './layout';
import { useState } from 'react';

const baseURL = "https://kest-server.onrender.com";

function App() {
  const [post, setPost] = useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  return (
    <div>
      <Layout/>
    </div>
  );
}

export default App;

