// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/postList';
import PostForm from './components/postForm';
import Header from './components/header';

const App: React.FC = () => {
  return (
    <Router> 
      <Header />
      <Routes>
        <Route path="/create" element={<PostForm />} />
        <Route path="/" element={<PostList />} />
      </Routes>
    </Router>
  );
};

export default App;
