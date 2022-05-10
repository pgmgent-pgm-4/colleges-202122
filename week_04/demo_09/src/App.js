import { Routes, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import { AboutPage, ContactPage, HomePage, PostDetailsPage, PostsPage } from "./pages";
import { BaseLayout, PostsLayout } from "./components/layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<PostsLayout />}>
            <Route index element={<PostsPage />} />
            <Route path=":postId" element={<PostDetailsPage/>} />
          </Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
