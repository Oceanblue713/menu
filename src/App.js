import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import ArticleContainer from "./components/Articles/ArticleContainer";
import Footer from "./components/Footer";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Grid>
          <Nav />
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/article/:id" element={<ArticleContainer />} />
          </Routes>
          <Footer />
        </Grid>
      </div>
    </Router>
  );
}

export default App;
