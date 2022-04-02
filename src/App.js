import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Article from "./components/Articles/Article";
import ArticleContainer from "./components/Articles/ArticleContainer";
import GalleryMain from "./components/Gallery/GalleryMain";
import Footer from "./components/Footer";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticleInput from "./components/NewArticle/ArticleInput";

function App() {
  return (
    <Router>
      <div className="app">
        <Grid>
          <Nav />
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/article/:link" element={<Article />} />
            <Route path="/newarticle" element={<ArticleInput />} />
            <Route path="/gallery" element={<GalleryMain />}></Route>
          </Routes>
          <Footer />
        </Grid>
      </div>
    </Router>
  );
}

export default App;
