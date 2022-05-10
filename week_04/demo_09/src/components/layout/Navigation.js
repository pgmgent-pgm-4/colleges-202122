import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-navigation">
      <Link to="/">Home</Link>
      <Link to="posts">Posts</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
    </nav>
  )
};

export default Navigation;