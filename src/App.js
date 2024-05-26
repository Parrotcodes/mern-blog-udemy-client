import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import AritclesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import Error from "./pages/Error";

// Components
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<AritclesList />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}
