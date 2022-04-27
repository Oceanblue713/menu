import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Article from "./components/Articles/Article";
import GalleryMain from "./components/Gallery/GalleryMain";
import Footer from "./components/Footer";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticleInput from "./components/NewArticle/ArticleInput";
import ArticleMain from "./components/Articles/ArticleMain";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="app">
          <Grid>
            <Nav />
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/article/:link" element={<Article />} />
              <Route path="/newarticle" element={<ArticleInput />} />
              <Route path="/gallery" element={<GalleryMain />} />
              <Route path="/articles" element={<ArticleMain />} />
            </Routes>
            <Footer />
          </Grid>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
