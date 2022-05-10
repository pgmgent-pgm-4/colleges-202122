import { Routes, Route, Link } from "react-router-dom";

import './App.scss';
import { AboutPage, ContactPage, HomePage, PostDetailsPage, PostsPage, ThreeDPage } from "./pages";
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
          <Route path="3d" element={<ThreeDPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
